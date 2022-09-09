/**
Copyright 2019 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

import '@polymer/paper-button'
import '@polymer/paper-slider'

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { PaperButtonElement } from '@polymer/paper-button';
import { SsmlBlock } from './ssml-block'
import { PaperSliderElement } from '@polymer/paper-slider';
import { Data } from '../ssml-types/ssml-type';
import { synthesize } from '../client-config';
import {TimelineBlock, TimelineMetadata} from '../ssml-import'

interface TrackingBlock {
  dataset: DOMStringMap
  startX: number
}

interface BlockDataset extends DOMStringMap {
  type: string
  text?: string
  alt?: string
  src?: string
  rate?: string
  pitch?: string
  clipBegin?: string
  clipEnd?: string
  alias?: string
  'interpret-as'?: string
  format?: string
  detail?: string
  level?: string
}

/**
 * @customElement
 * @polymer
 */
export class SsmlTimeline extends PolymerElement {
  blockIndex: number
  sidebarWidth: number
  btnPlay: PaperButtonElement
  btnStop: PaperButtonElement
  blocks: TimelineBlock[] = []
  duration = 0
  pixelsPerSecond = 100
  trackingBlock?: {
    data: Data
    index: number
    startX: number
    x: number
    trackX: number
  }
  trackHeight = 152
  locale = 'en-US'
  voice = 'en-US-Standard-D'
  snapPoints: number[] = [0]
  snapTracks: number[] = [-1]
  tracksMetadata: TimelineMetadata[] = []
  playTimers: number[] = []

  constructor() {
    super();

    // REGISTER VARS
    this.blockIndex = 0;
    this.sidebarWidth = 320;

    // REGISTER ELEMENTS
    this.btnPlay = document.getElementById('btn-play')! as PaperButtonElement;
    this.btnStop = document.getElementById('btn-stop')! as PaperButtonElement;

    // BIND METHODS
    this.blockTrackStart = this.blockTrackStart.bind(this);
    this.addBlock = this.addBlock.bind(this);
    this.updateTimeline = this.updateTimeline.bind(this);
    this.updateOverlappingBlocks = this.updateOverlappingBlocks.bind(this);
  }

  static get template(): HTMLTemplateElement {
    return html`
      <div id='timeCursor' data-start="0" part="time-cursor"></div>
      <div id='tts'></div>
      <div id='ticker' part="ticker"></div>

      <table>
        <tr>
          <td>
            <div id='trackJawn' part="settings-bar"></div>
          </td>

          <td>
            <div id='tracks' part="track-list"></div>
          </td>
        </tr>
      </table>

      <div id='blankstate'>
        Drag and drop blocks here from the bottom drawer.
      </div>
      <div id='status' style='display:none'></div>
    `;
  }

  addBlock(blockDataset: TrackingBlock, x: number, y: number): void {
    if (blockDataset && blockDataset.dataset && blockDataset.dataset['type']) {
      const dataset = blockDataset.dataset as BlockDataset
      this.blocks[this.blockIndex] = {
        type: dataset.type,
        time: x / this.pixelsPerSecond,
        // 128 is vertical size of block
        track: Math.max(Math.floor((y - 128) / this.trackHeight), 0),
        data: {
          'text': dataset.text,
          'alt': dataset.alt,
          'src': dataset.src,
          'rate': dataset.rate,
          'pitch': dataset.pitch,
          'clipBegin': dataset.clipBegin,
          'clipEnd': dataset.clipEnd,
          'alias': dataset.alias,
          'interpret-as': dataset['interpretAs'],
          'format': dataset.format,
          'detail': dataset.detail,
          'level': dataset.level,
        },
        id: this.blockIndex,
        audioUpdated: 0,
      }

      this.updateTimeline();

      window.requestAnimationFrame(() => {
        this.genAudio(this.blockIndex);
        this.blockIndex++
      });
    }
  }

  updateTimeline(): void {
    let html = '';

    this.snapPoints = [0];
    this.snapTracks = [0];

    const blankState = this.$['blankstate'] as HTMLElement
    if (this.blocks.length > 0) {
      blankState.classList.add('hidden')
    } else {
      blankState.classList.remove('hidden')
    }

    Object.values(this.blocks).forEach((block) => {
      html += `
        <ssml-block part="audio-clip" class="timeline-block"
          style="margin-left: ${block.time * this.pixelsPerSecond}px;
            margin-top: ${64 + this.trackHeight * block.track}px;"
          index="${block.id}" id="timeline-block-${block.id}">
        </ssml-block>
      `;

      this.snapPoints.push(block.time + (block.duration || 0));
      this.snapTracks.push(block.track);
    });

    this.$['tracks'].innerHTML = html;
    this.updateOverlappingBlocks();

    this.$['tracks'].querySelectorAll('.timeline-block')
        .forEach((block: SsmlBlock) => {
          block.copy(this.blocks[block.index]);
          block.oncontextmenu = this.openEditor;
          block.onmousedown = this.blockTrackStart;
          block.editBtn().onclick = this.openEditor;

          block.deleteBtn().onclick = (event: MouseEvent) => {
            const target = event.target! as SsmlBlock
            const index = target.dataset['index']!
            delete this.blocks[parseInt(index)];
            this.updateTimeline();
          }
        });

    this.onmousemove = this.blockTrackMove;
    this.onmouseup = this.blockTrackEnd;

    // Show the track-level settings
    const trackCount = this.getTrackCount();
    let trackHtml = '';
    for (let i = 0; i < trackCount; i++) {
      if (!this.tracksMetadata[i]) {
        this.tracksMetadata[i] = {
          soundLevel: 0,
          fadeInDur: 0,
          fadeOutDur: 0,
        }
      }
      trackHtml += `
        <div class='track-label' part="track-setting"
            style="margin-top: ${this.trackHeight * i}px;
              height: ${this.trackHeight - 8}px">
          <h3 part="track-setting-title">Track ${i}</h3>

          <div part="track-setting-row">
            <label part="track-setting-label">Volume</label>
            <paper-slider part="track-setting-slider"
              id="track-soundlevel-${i}" pin step="0.5"
              value="${this.tracksMetadata[i].soundLevel}" max="10" min="-10">
            </paper-slider>
          </div>
          <div part="track-setting-row">
            <label part="track-setting-label">Fade In</label>
            <paper-slider part="track-setting-slider"
              id="track-fadein-${i}" pin max="10" step="0.2"
              value="${this.tracksMetadata[i].fadeInDur}">
            </paper-slider>
          </div>
          <div part="track-setting-row">
            <label part="track-setting-label">Fade Out</label>
            <paper-slider part="track-setting-slider"
              id="track-fadeout-${i}" pin max="10" step="0.2"
              value="${this.tracksMetadata[i].fadeOutDur}">
            </paper-slider>
          </div>
        </div>`;
    }

    this.$['trackJawn'].innerHTML = trackHtml;

    const trackContainer = this.$['trackJawn']

    for (let i = 0; i < trackCount; i++) {
      trackContainer.querySelector(`#track-soundlevel-${i}`)!
          .addEventListener('value-change', () => {
            const soundLevelElement = trackContainer
                .querySelector(`#track-soundlevel-${i}`)! as PaperSliderElement
            this.tracksMetadata[i].soundLevel = soundLevelElement.value!;
          });
      trackContainer.querySelector(`#track-fadein-${i}`)!
          .addEventListener('value-change', () => {
            const fadeInElement = trackContainer
                .querySelector(`#track-fadein-${i}`)! as PaperSliderElement
            this.tracksMetadata[i].fadeInDur = fadeInElement.value!;
          });
      trackContainer.querySelector(`#track-fadeout-${i}`)!
          .addEventListener('value-change', () => {
            const fadeOutElement = trackContainer
                .querySelector(`#track-fadeout-${i}`)! as PaperSliderElement
            this.tracksMetadata[i].fadeOutDur = fadeOutElement.value!;
          });
    }

    this.mix();
    this.ticker();
  }

  updateOverlappingBlocks(): void {
    // Check whether blocks are overlapping
    const tracks = this.blocksToTracks();
    // Identify the breaks between each block in each track
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      if (!track) continue;

      for (let j = 0; j < track.length - 1; j++) {
        if (track[j].type == 'break') continue;
        const gapStart = track[j + 1].time;
        const block = track[j];
        if (block.time + block.duration! > gapStart) {
          // Blocks appear to be overlapping
          const blockId1 = block.id;
          const blockId2 = track[j + 1].id;
          this.$['tracks'].querySelector(`#timeline-block-${blockId1}`)!
              .classList.add('overlapping');
          this.$['tracks'].querySelector(`#timeline-block-${blockId2}`)!
              .classList.add('overlapping');
        }
      }
    }
  }

  blocksToTracks(): TimelineBlock[][] {
    const tracks: TimelineBlock[][] = [];
    // Group every block together by track id
    Object.values(this.blocks).forEach((block) => {
      if (!tracks[block.track]) {
        tracks[block.track] = [];
      }
      tracks[block.track].push(block);
    });
    // Sort contents of each track by start time
    for (let i = 0; i < tracks.length; i++) {
      if (!tracks[i]) continue;
      tracks[i].sort((blockA, blockB) => {
        if (blockA.time < blockB.time) {
          return -1;
        } else if (blockA.time > blockB.time) {
          return 1;
        }
        // There should never be two blocks on the same track
        // that have the same start time as they'd be overlapping
        return 0;
      })
    }
    return tracks;
  }

  getTrackCount(): number {
    const tracks = this.blocksToTracks();
    return tracks.length;
  }

  ticker(): void {
    // Populate the ticker
    let tickerHtml = '';
    const lengthPixels = this.duration * this.pixelsPerSecond
    const max = Math.max(lengthPixels, window.innerWidth - 320) + 320;

    const ticker = this.$['ticker'] as HTMLElement
    ticker.style.width = `${max}px`;
    const tracks = this.$['tracks'] as HTMLElement
    tracks.style.width = `${max}px`;


    for (let i = 0; i < max; i += 50) {
      // Put something every 50 pixels
      tickerHtml += '<div part=\'ticker-tick\' class=\'ticker-tick\'>';
      if (i === 0) {
        tickerHtml += `0s`;
      } else {
        if (i % this.pixelsPerSecond === 0) {
          // Perfect second
          if ((i / this.pixelsPerSecond) - 0.5 > 0) {
            tickerHtml += `${(i / this.pixelsPerSecond) - 0.5}s`;
          }
        } else {
          tickerHtml += `|`
        }
      }
      tickerHtml += '</div>';
    }
    ticker.innerHTML = tickerHtml;

    // Add a listener to manually set the cursor
    ticker.onclick = (event: any) => {
      const x = event.layerX;
      if (x < this.sidebarWidth) return; // Too far left
      const timeCursor = this.$['timeCursor'] as HTMLElement
      timeCursor.dataset['start'] =
        `${((x-this.sidebarWidth)/this.pixelsPerSecond)}`;
      timeCursor.style.marginLeft = `${x}px`;
      this.stop((x-this.sidebarWidth)/this.pixelsPerSecond);
    }
  }

  updateStatus(status: string): void {
    const statusElement = this.$['status'] as HTMLElement
    statusElement.innerText = status;
  }

  blockTrackStart(event: MouseEvent): void {
    let srcElement: SsmlBlock | undefined;
    let tracks: SsmlTimeline | undefined;

    event.composedPath().forEach((el: HTMLElement) => {
      if (el.classList && el.classList.contains('timeline-block')) {
        srcElement = el as SsmlBlock;
      }
      if (el.id === 'timeline') {
        tracks = el as SsmlTimeline;
      }
    })

    if (!srcElement || !tracks) return

    // Associate tracking block in the module scope
    tracks.trackingBlock = {
      data: srcElement.data,
      index: srcElement.index,
      startX: event.offsetX,
      x: event.clientX - this.sidebarWidth,
      trackX: parseInt(srcElement.style.marginLeft),
    }
  }

  blockTrackMove(event: MouseEvent): void {
    // Intermediary event while you're moving an item
    if (!this.trackingBlock || !this.trackingBlock.data) return;
    // Update the time for this block
    const blockId = this.trackingBlock.index;
    if (isNaN(blockId) || !this.blocks[blockId]) return;
    // this.blocks[blockId].time = event.offsetX / this.pixelsPerSecond;

    // SNAP LOGIC
    let posX = event.offsetX - this.sidebarWidth - this.trackingBlock.startX;
    const time = posX / this.pixelsPerSecond;
    const deltaT = 0.1; // 0.1s
    const posY = event.offsetY;
    this.$['tracks'].querySelector(`#timeline-block-${blockId}`)!
        .classList.remove('snap');
    for (const point of this.snapPoints) {
      if (Math.abs(point - time) < deltaT) {
        // It's a snap
        const snapX = this.pixelsPerSecond * point;
        posX = snapX;
        this.$['tracks'].querySelector(`#timeline-block-${blockId}`)!
            .classList.add('snap');
      }
    }

    window.requestAnimationFrame(() => {
      const block = this.$['tracks']
          .querySelector(`#timeline-block-${blockId}`)! as HTMLElement
      block.style.marginLeft = `${posX}px`;
      const top = 64 + Math.floor(posY / this.trackHeight) * this.trackHeight
      block.style.marginTop = `${top}px`;
    })
  }

  blockTrackEnd(event: MouseEvent): void {
    if (!this.trackingBlock) return;

    if (this.trackingBlock.x === event.clientX - this.sidebarWidth ||
        !this.trackingBlock.data) {
      this.trackingBlock = undefined;
      return;
    }

    let posX = event.offsetX - this.sidebarWidth - this.trackingBlock.startX;
    // Update the time for this block
    const blockId = this.trackingBlock.index;

    // SNAP LOGIC
    const time = posX / this.pixelsPerSecond;
    const deltaT = 0.1; // 0.1s
    const posY = event.offsetY;
    this.$['tracks'].querySelector(`#timeline-block-${blockId}`)!
        .classList.remove('snap');
    for (const point of this.snapPoints) {
      if (Math.abs(point - time) < deltaT) {
        // It's a snap
        const snapX = this.pixelsPerSecond * point;
        posX = snapX;
        this.$['tracks'].querySelector(`#timeline-block-${blockId}`)!
            .classList.add('snap');
      }
    }

    this.blocks[blockId].time = posX / this.pixelsPerSecond;
    this.blocks[blockId].track = Math.floor(posY / this.trackHeight);

    this.updateTimeline();
    this.trackingBlock = undefined;
  }

  openEditor(event: MouseEvent): void {
    let srcElement: SsmlBlock | undefined;
    let timeline: SsmlTimeline | undefined;

    event.composedPath().forEach((el: HTMLElement) => {
      if (el.classList && el.classList.contains('timeline-block')) {
        srcElement = el as SsmlBlock;
      }
      if (el.id === 'timeline') {
        timeline = el as SsmlTimeline;
      }
    });

    if (!srcElement || !timeline) return

    // Make sure this is not interpreted as a drag
    timeline.trackingBlock = undefined;

    srcElement.openEditor(timeline);

    // Don't actually open up a context menu
    event.preventDefault();
  }

  genSsml(block: TimelineBlock): string {
    let blockElement =
      this.$['tracks'].querySelector(`#timeline-block-${block.id}`) as SsmlBlock;
    if (!blockElement) {
      // Create a block just for this operation
      blockElement = document.createElement('ssml-block') as SsmlBlock;
      blockElement.copy(block);
    }
    return blockElement.getSsml();
  }

  genWrappedSsml(block: TimelineBlock): string {
    let blockElement =
      this.$['tracks'].querySelector(`#timeline-block-${block.id}`) as SsmlBlock;
    if (!blockElement) {
      // Create a block just for this operation
      blockElement = document.createElement('ssml-block') as SsmlBlock;
      blockElement.copy(block);
    }
    return blockElement.getWrappedSsml();
  }

  getSsml(): string {
    const tracks = this.blocksToTracks();

    // Identify the breaks between each block in each track
    const trackStarts = [];
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      if (!track) continue;
      trackStarts[i] = track[0].time; // Get first block time as start
      for (let j = 0; j < track.length; j++) {
        if (track[j].type == 'break') continue;
        // Clear any previous track data
        tracks[i][j].begin = undefined
        const block = track[j];
        const begin = block.time
        tracks[i][j].begin = begin
      }
    }

    // Render the <media> for each track
    const mediaTags = [];
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      if (!track) continue;

      // Check for snap marker, giving this a specific
      // time designation like `question.end` instead of
      // a time like `2s`
      const startTime = trackStarts[i];
      let startTimeStr = `${trackStarts[i]}s`
      for (let j = 1; j < this.snapPoints.length; j++) {
        if (startTime.toFixed(2) === this.snapPoints[j].toFixed(2) &&
            this.snapTracks[j] != i) {
          startTimeStr = `track-${this.snapTracks[j]}.end`
          break;
        }
      }

      const soundLevelElement = this.$['trackJawn']
          .querySelector(`#track-soundlevel-${i}`)! as PaperSliderElement
      const soundLevel = soundLevelElement.value!;
      const soundLevelString =
        (soundLevel >= 0) ? `+${soundLevel}dB` : `${soundLevel}dB`;

      const fadeInElement = this.$['trackJawn']
          .querySelector(`#track-fadein-${i}`) as PaperSliderElement
      const fadeInDur = fadeInElement.value;

      const fadeOutElement = this.$['trackJawn']
          .querySelector(`#track-fadeout-${i}`) as PaperSliderElement
      const fadeOutDur = fadeOutElement.value;
      let ssml = `\t<media xml:id="track-${i}"` +
          `${startTimeStr ? ` begin="${startTimeStr}"`: ''}` +
          `${soundLevelString ? ` soundLevel="${soundLevelString}"`: ''}` +
          `${fadeInDur ? ` fadeInDur="${fadeInDur}s"` : ''}` +
          `${fadeOutDur ? ` fadeOutDur="${fadeOutDur}s"` : ''}>\n`
      if (track.length > 1) {
        ssml += `\t\t<seq>\n`
      }
      for (let j = 0; j < track.length; j++) {
        if (track.length > 1) {
          ssml += `\t\t` +
            `<media${track[j].begin ? ` begin="${track[j].begin}s"` : ''}>\n`
          ssml += `\t\t\t` +
            `${this.genWrappedSsml(track[j])}\n`
          ssml += `\t\t</media>\n`
        } else {
          ssml += `\t\t${this.genWrappedSsml(track[j])}\n`
        }
      }
      if (track.length > 1) {
        ssml += `\t\t</seq>\n`
      }
      ssml += `\t</media>`
      mediaTags.push(ssml);
    }

    // Output everything
    let ssml;
    if (tracks.length <= 1) {
      ssml = '<speak><seq>\n'
    } else {
      ssml = '<speak><par>\n'
    }

    for (const tag of mediaTags) {
      ssml += `${tag}\n`;
    }

    if (tracks.length <= 1) {
      ssml += '</seq></speak>'
    } else {
      ssml += '</par></speak>'
    }

    return ssml;
  }

  genAudioConfig(blockId: number, ssmlContent: string): Record<string, any> {
    const blockElement =
      this.$['tracks'].querySelector(`#timeline-block-${blockId}`) as SsmlBlock;
    const config = blockElement.getAudioConfig(ssmlContent);

    // Change voice if applicable
    config.voice = {
      languageCode: this.locale,
      name: this.voice,
    }

    return config;
  }

  resetAudio(): void {
    this.$['tracks'].querySelectorAll('.timeline-block')
        .forEach((block: SsmlBlock) => {
          this.genAudio(block.index);
        });
  }

  genAudio(blockId: number): void {
    // Determine when the audio was last updated
    const audioRequestSentTime = Date.now();
    const block =
      this.$['tracks'].querySelector(`#timeline-block-${blockId}`) as SsmlBlock
    block.classList.add('pending');

    synthesize(block.getSsml(), {languageCode: this.locale, name: this.voice})
        .then((result: string) => {
        // Read result of the Cloud Function.
          if (this.blocks[blockId].audioUpdated <= audioRequestSentTime) {
            this.blocks[blockId].audioUpdated = audioRequestSentTime;
            this.blocks[blockId].audio = result;
            this.mix();
          } // Otherwise, the audio data is considered stale
          block.classList.remove('pending');
        }).catch((e: Error) => {
          console.error(`Cannot sythesize audio for block ${blockId}`, e)
        })
  }

  mix(): void {
    // There are no good JS mixer libraries
    // We'll do our own thing

    // Delete all audio clips
    // In the future, we can update some individually
    this.$['tts'].innerHTML = ''
    Object.values(this.blocks).forEach((block) => {
      if (!block.audio) return;
      this.$['tts'].innerHTML += `
        <audio id='audio${block.id}' data-start='${block.time}'>
          <source type='audio/wav' src='data:audio/wav;base64,${block.audio}'>
        </audio>
      `;
    })
    this.duration = 0;
    this.$['tts'].querySelectorAll('audio').forEach((audio: HTMLAudioElement) => {
      audio.onloadeddata = () => {
        // Update our max length
        const blockId = parseInt(audio.id.substr(5));
        this.blocks[blockId].duration = audio.duration;
        this.duration = Math.max(this.duration,
            parseFloat(audio.dataset['start']!) + audio.duration)
        // Update the length of that audio block
        const block = this.$['tracks']
            .querySelector(`#timeline-block-${blockId}`) as HTMLElement;
        block.style.width = `${audio.duration * this.pixelsPerSecond}px`;
        this.ticker();

        if (this.duration > 240) {
          this.updateStatus('Actions on Google has an SSML limit of 240s');
        } else {
          this.updateStatus(`Total time ${Math.ceil(this.duration)}s`);
        }
      }
    })
  }

  play(cb: () => void): void {
    // Display a cursor as we play content
    const timeCursor = this.$['timeCursor'] as HTMLElement;
    const startTime = parseFloat(timeCursor.dataset['start']!) * 1000
    const absoluteTime = new Date().getTime() - startTime;
    timeCursor.classList.add('play');

    // As we are playing a ton of audio files potentially,
    // we timeout based on our estimated timeline duration
    this.playTimers = [];

    const timerPlayButton = window.setTimeout(() => {
      cb()
      timeCursor.classList.remove('play');
      timeCursor.dataset['start'] = '0'
    }, this.duration * 1000 + 100 - startTime /* ms */);
    this.playTimers.push(timerPlayButton);

    this.$['tts'].querySelectorAll('audio').forEach((audio: HTMLAudioElement) => {
      const timeInPlaythrough =
        parseFloat(audio.dataset['start']!) * 1000 - startTime; /* ms */
      if (timeInPlaythrough < 0) {
        return; // We've already gone past this block. Don't play it.
      }

      const timerAudioPlayback = window.setTimeout((audio: HTMLAudioElement) => {
        audio.play();
      }, timeInPlaythrough, audio);
      this.playTimers.push(timerAudioPlayback);
    })

    const timeCursorIterate = (pixelsPerSecond: number) => {
      if (timeCursor.classList.contains('play')) {
        const playTime = new Date().getTime() - absoluteTime;
        timeCursor.style.marginLeft =
          `${pixelsPerSecond * playTime / 1000 + 320}px`;
        document.getElementById('timeline-time')!.innerHTML =
          this.playTime(playTime)
        setTimeout(timeCursorIterate, 20, pixelsPerSecond);
      }
    }

    setTimeout(timeCursorIterate, 0, this.pixelsPerSecond);
  }

  playTime(ms: number): string {
    const minutes = Math.floor(ms / 1000 / 60);
    ms -= minutes * 1000 * 60;
    const seconds = Math.floor(ms / 1000);
    ms -= seconds * 1000;
    ms = Math.floor(ms);
    return `${minutes}:${seconds > 9 ? seconds : `0${seconds}`}.` +
      `${ms > 99 ? ms : (ms > 9 ? `0${ms}` : `00${ms}`)}`
  }

  stop(currentPos: number): void {
    const timeCursor = this.$['timeCursor'] as HTMLElement
    timeCursor.classList.remove('play');
    timeCursor.dataset['start'] = `${currentPos}` || '0';

    document.getElementById('timeline-time')!.innerHTML =
      this.playTime(currentPos * 1000 || 0);

    this.$['tts'].querySelectorAll('audio').forEach((audio: HTMLAudioElement) => {
      audio.currentTime = currentPos || 0;
      audio.pause();
    })

    // RENABLE PLAY BUTTON
    if (currentPos) {
      this.btnPlay.disabled = false;
      this.btnPlay.classList.remove('is-hidden');
      this.btnStop.classList.add('is-hidden');
    }

    // Clear all related timers
    if (this.playTimers) {
      this.playTimers.forEach((timerId) => {
        clearTimeout(timerId);
      })
    }
  }

  zoomIn(): void {
    if (this.pixelsPerSecond <= 100) {
      this.pixelsPerSecond *= 2;
      this.updateTimeline();
    }
  }

  zoomRefresh(): void {
    this.pixelsPerSecond = 100;
    this.updateTimeline();
  }

  zoomOut(): void {
    if (this.pixelsPerSecond >= 100) {
      this.pixelsPerSecond /= 2;
      this.updateTimeline();
    }
  }
}

window.customElements.define('ssml-timeline', SsmlTimeline);
