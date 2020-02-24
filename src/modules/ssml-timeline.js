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

import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {synthesize} from '../client-config'

/**
 * @customElement
 * @polymer
 */
class SsmlTimeline extends PolymerElement {
  constructor() {
    super();

    // REGISTER VARS
    this.blockIndex = 0;
    this.sidebarWidth = 320;

    // REGISTER ELEMENTS
    this.btnPlay = document.getElementById('btn-play');
    this.btnStop = document.getElementById('btn-stop');

    // BIND METHODS
    this.blockTrackStart = this.blockTrackStart.bind(this);
    this.addBlock = this.addBlock.bind(this);
    this.updateTimeline = this.updateTimeline.bind(this);
    this.updateOverlappingBlocks = this.updateOverlappingBlocks.bind(this);
  }

  static get template() {
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

      <div part='blankstate' id='status'>
        Drag and drop blocks here from the bottom drawer.
      </div>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'ssml-timeline',
      },
      blocks: {
        type: Object,
        value: {},
      },
      blockIndex: {
        type: Number,
        value: 0,
      },
      duration: {
        type: Number,
        value: 0,
      },
      pixelsPerSecond: {
        type: Number,
        value: 100,
      },
      trackingBlock: {
        type: Object,
        value: {},
      },
      trackHeight: {
        type: Number,
        value: 152,
      },
      locale: {
        type: String,
        value: 'en-US',
      },
      voice: {
        type: String,
        value: 'en-US-Standard-D',
      },
      snapPoints: {
        type: Array,
        value: [0],
      },
      snapTracks: {
        type: Array,
        value: [-1],
      },
      tracksMetadata: {
        type: Array,
        value: [],
      },
    };
  }

  addBlock(blockDataset, x, y) {
    if (blockDataset && blockDataset.dataset && blockDataset.dataset.type) {
      this.blocks[this.blockIndex] = {
        type: blockDataset.dataset.type,
        time: x / this.pixelsPerSecond,
        // 128 is vertical size of block
        track: Math.max(Math.floor((y - 128) / this.trackHeight), 0),
        data: {
          'text': blockDataset.dataset.text,
          'alt': blockDataset.dataset.alt,
          'src': blockDataset.dataset.src,
          'rate': blockDataset.dataset.rate,
          'pitch': blockDataset.dataset.pitch,
          'clipBegin': blockDataset.dataset.clipBegin,
          'clipEnd': blockDataset.dataset.clipEnd,
          'alias': blockDataset.dataset.alias,
          'interpret-as': blockDataset.dataset.interpretAs,
          'format': blockDataset.dataset.format,
          'detail': blockDataset.dataset.detail,
          'level': blockDataset.dataset.level,
        },
        id: this.blockIndex,
        audioUpdated: 0,
      }

      this.updateTimeline();

      window.requestAnimationFrame(() => {
        const ssml = this.genSsml(this.blocks[this.blockIndex]);

        this.genAudio(this.blockIndex, ssml);
        this.blockIndex++
      });
    }
  }

  updateTimeline() {
    let html = '';
    // eslint-disable-next-line
    let trackId = 0;

    this.snapPoints = [0];
    this.snapTracks = [0];

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
      trackId++;
    });

    this.$.tracks.innerHTML = html;
    this.updateOverlappingBlocks();

    this.$.tracks.querySelectorAll('.timeline-block').forEach((block) => {
      block.copy(this.blocks[block.index]);
      block.oncontextmenu = this.openEditor;
      block.onmousedown = this.blockTrackStart;
      block.editBtn().onclick = this.openEditor;

      block.deleteBtn().onclick = (event) => {
        delete this.blocks[event.path[0].dataset.index];
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

    this.$.trackJawn.innerHTML = trackHtml;

    for (let i = 0; i < trackCount; i++) {
      this.$.trackJawn.querySelector(`#track-soundlevel-${i}`)
          .addEventListener('value-change', () => {
            this.tracksMetadata[i].soundLevel =
              this.$.trackJawn.querySelector(`#track-soundlevel-${i}`).value;
          });
      this.$.trackJawn.querySelector(`#track-fadein-${i}`)
          .addEventListener('value-change', () => {
            this.tracksMetadata[i].fadeInDur =
              this.$.trackJawn.querySelector(`#track-fadein-${i}`).value;
          });
      this.$.trackJawn.querySelector(`#track-fadeout-${i}`)
          .addEventListener('value-change', () => {
            this.tracksMetadata[i].fadeOutDur =
              this.$.trackJawn.querySelector(`#track-fadeout-${i}`).value;
          });
    }

    this.mix();
    this.ticker();
  }

  updateOverlappingBlocks() {
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
        if (block.time + block.duration > gapStart) {
          // Blocks appear to be overlapping
          const blockId1 = block.id;
          const blockId2 = track[j + 1].id;
          this.$.tracks.querySelector(`#timeline-block-${blockId1}`)
              .classList.add('overlapping');
          this.$.tracks.querySelector(`#timeline-block-${blockId2}`)
              .classList.add('overlapping');
        }
      }
    }
  }

  blocksToTracks() {
    const tracks = [];
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

  getTrackCount() {
    const tracks = this.blocksToTracks();
    return tracks.length;
  }

  ticker() {
    // Populate the ticker
    let tickerHtml = '';
    const lengthPixels = this.duration * this.pixelsPerSecond
    const max = Math.max(lengthPixels, window.innerWidth - 320) + 320;

    this.$.ticker.style.width = `${max}px`;
    this.$.tracks.style.width = `${max}px`;


    for (let i = 0; i < max; i += 40) {
      // Put something every 40 pixels
      tickerHtml += '<div part=\'ticker-tick\' class=\'ticker-tick\'>'
      if (i % this.pixelsPerSecond === 0) {
        // Perfect second
        tickerHtml += `${i / this.pixelsPerSecond}s`;
      } else {
        tickerHtml += `|`
      }
      tickerHtml += '</div>';
    }
    this.$.ticker.innerHTML = tickerHtml;

    // Add a listener to manually set the cursor
    this.$.ticker.onclick = (event) => {
      const x = event.layerX;
      if (x < this.sidebarWidth) return; // Too far left
      this.$.timeCursor.dataset.start =
        ((x-this.sidebarWidth)/this.pixelsPerSecond);
      this.$.timeCursor.style.marginLeft = `${x}px`;
      this.stop((x-this.sidebarWidth)/this.pixelsPerSecond);
    }
  }

  updateStatus(status) {
    this.$.status.part = 'status';
    this.$.status.innerText = status;
  }

  blockTrackStart(event) {
    let srcElement;
    let tracks;
    event.path.forEach((el) => {
      if (el.classList && el.classList.contains('timeline-block')) {
        srcElement = el;
      }
      if (el.id === 'timeline') {
        tracks = el;
      }
    })
    // Associate tracking block in the module scope
    tracks.trackingBlock = {
      data: srcElement.data,
      index: srcElement.index,
      startX: event.offsetX,
      x: event.clientX - this.sidebarWidth,
      trackX: parseInt(srcElement.style.marginLeft),
    }
  }

  blockTrackMove(event) {
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
    this.$.tracks.querySelector(`#timeline-block-${blockId}`)
        .classList.remove('snap');
    for (const point of this.snapPoints) {
      if (Math.abs(point - time) < deltaT) {
        // It's a snap
        const snapX = this.pixelsPerSecond * point;
        posX = snapX;
        this.$.tracks.querySelector(`#timeline-block-${blockId}`)
            .classList.add('snap');
      }
    }

    window.requestAnimationFrame(() => {
      this.$.tracks.querySelector(`#timeline-block-${blockId}`)
          .style.marginLeft = `${posX}px`;
      const top = 64 + Math.floor(posY / this.trackHeight) * this.trackHeight
      this.$.tracks.querySelector(`#timeline-block-${blockId}`)
          .style.marginTop = `${top}px`;
    })
  }

  blockTrackEnd(event) {
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
    this.$.tracks.querySelector(`#timeline-block-${blockId}`)
        .classList.remove('snap');
    for (const point of this.snapPoints) {
      if (Math.abs(point - time) < deltaT) {
        // It's a snap
        const snapX = this.pixelsPerSecond * point;
        posX = snapX;
        this.$.tracks.querySelector(`#timeline-block-${blockId}`)
            .classList.add('snap');
      }
    }

    this.blocks[blockId].time = posX / this.pixelsPerSecond;
    this.blocks[blockId].track = Math.floor(posY / this.trackHeight);

    this.updateTimeline();
    this.trackingBlock = undefined;
  }

  openEditor(event) {
    let srcElement;
    let timeline;
    event.path.forEach((el) => {
      if (el.classList && el.classList.contains('timeline-block')) {
        srcElement = el;
      }
      if (el.id === 'timeline') {
        timeline = el;
      }
    });

    // Make sure this is not interpreted as a drag
    timeline.trackingBlock = undefined;

    srcElement.openEditor(timeline);

    // Don't actually open up a context menu
    event.preventDefault();
  }

  genSsml(block) {
    let blockElement =
      this.$.tracks.querySelector(`#timeline-block-${block.id}`);
    if (!blockElement) {
      // Create a block just for this operation
      blockElement = document.createElement('ssml-block');
      blockElement.copy(block);
    }
    return blockElement.getSsml();
  }

  genWrappedSsml(block) {
    let blockElement =
      this.$.tracks.querySelector(`#timeline-block-${block.id}`);
    if (!blockElement) {
      // Create a block just for this operation
      blockElement = document.createElement('ssml-block');
      blockElement.copy(block);
    }
    return blockElement.getWrappedSsml();
  }

  getSsml() {
    const tracks = this.blocksToTracks();

    // Identify the breaks between each block in each track
    const trackStarts = [];
    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];
      if (!track) continue;
      trackStarts[i] = track[0].time; // Get first block time as start
      for (let j = 0; j < track.length - 1; j++) {
        if (track[j].type == 'break') continue;
        // Clear any previous track data
        tracks[i][j+1].begin = undefined
        const gapStart = track[j + 1].time;
        const block = track[j];
        const begin = (gapStart - block.time - block.duration)
        if (block.time + block.duration < gapStart) {
          tracks[i][j+1].begin = begin
        }
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

      const soundLevel =
        this.$.trackJawn.querySelector(`#track-soundlevel-${i}`).value;
      const soundLevelString =
        (soundLevel >= 0) ? `+${soundLevel}dB` : `${soundLevel}dB`;
      const fadeInDur =
        this.$.trackJawn.querySelector(`#track-fadein-${i}`).value;
      const fadeOutDur =
        this.$.trackJawn.querySelector(`#track-fadeout-${i}`).value;
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

  resetAudio() {
    this.$.tracks.querySelectorAll('.timeline-block').forEach((block) => {
      this.genAudio(block.index, block.getSsml());
    });
  }

  genAudio(blockId, ssmlContent) {
    // Determine when the audio was last updated
    const audioRequestSentTime = new Date();

    const block = this.$.tracks.querySelector(`#timeline-block-${blockId}`);
    block.classList.add('pending');

    synthesize(block.getSsml(), {languageCode: this.locale, name: this.voice})
        .then((result) => {
        // Read result of the Cloud Function.
          if (this.blocks[blockId].audioUpdated <= audioRequestSentTime) {
            this.blocks[blockId].audioUpdated = audioRequestSentTime;

            this.blocks[blockId].audio = result;
            this.mix();
          } // Otherwise, the audio data is considered stale
          block.classList.remove('pending');
        }).catch((e) => {
          console.error(`Cannot sythesize audio for block ${blockId}`, e)
        })
  }

  mix() {
    // There are no good JS mixer libraries
    // We'll do our own thing

    // Delete all audio clips
    // In the future, we can update some individually
    this.$.tts.innerHTML = ''
    Object.values(this.blocks).forEach((block) => {
      if (!block.audio) return;
      this.$.tts.innerHTML += `
        <audio id='audio${block.id}' data-start='${block.time}'>
          <source type='audio/wav' src='data:audio/wav;base64,${block.audio}'>
        </audio>
      `;
    })
    this.duration = 0;
    this.$.tts.querySelectorAll('audio').forEach((audio) => {
      audio.onloadeddata = () => {
        // Update our max length
        const blockId = audio.id.substr(5);
        this.blocks[blockId].duration = audio.duration;
        this.duration = Math.max(this.duration,
            parseFloat(audio.dataset.start) + audio.duration)
        // Update the length of that audio block
        const block = this.$.tracks.querySelector(`#timeline-block-${blockId}`);
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

  play(cb) {
    // Display a cursor as we play content
    const timeCursor = this.$.timeCursor;
    const startTime = parseFloat(timeCursor.dataset.start) * 1000
    const absoluteTime = new Date().getTime() - startTime;
    timeCursor.classList.add('play');

    // As we are playing a ton of audio files potentially,
    // we timeout based on our estimated timeline duration
    this.playTimers = [];

    const timerPlayButton = setTimeout(() => {
      cb()
      timeCursor.classList.remove('play');
      timeCursor.dataset.start = 0
    }, this.duration * 1000 + 100 - startTime /* ms */);
    this.playTimers.push(timerPlayButton);

    this.$.tts.querySelectorAll('audio').forEach((audio) => {
      const timeInPlaythrough = audio.dataset.start * 1000 - startTime; /* ms */
      if (timeInPlaythrough < 0) {
        return; // We've already gone past this block. Don't play it.
      }

      const timerAudioPlayback = setTimeout((audio) => {
        audio.play();
      },
      timeInPlaythrough,
      audio);
      this.playTimers.push(timerAudioPlayback);
    })

    const timeCursorIterate = (pixelsPerSecond) => {
      if (timeCursor.classList.contains('play')) {
        const playTime = new Date().getTime() - absoluteTime;
        timeCursor.style.marginLeft =
          `${pixelsPerSecond * playTime / 1000 + 320}px`;
        document.getElementById('timeline-time').innerHTML =
          this.playTime(playTime)
        setTimeout(timeCursorIterate, 20, pixelsPerSecond);
      }
    }

    setTimeout(timeCursorIterate, 0, this.pixelsPerSecond);
  }

  playTime(ms) {
    const minutes = Math.floor(ms / 1000 / 60);
    ms -= minutes * 1000 * 60;
    const seconds = Math.floor(ms / 1000);
    ms -= seconds * 1000;
    ms = Math.floor(ms);
    return `${minutes}:${seconds > 9 ? seconds : `0${seconds}`}.` +
      `${ms > 99 ? ms : (ms > 9 ? `0${ms}` : `00${ms}`)}`
  }

  stop(curr) {
    this.$.timeCursor.classList.remove('play');
    this.$.timeCursor.dataset.start = curr || 0;

    document.getElementById('timeline-time').innerHTML =
      this.playTime(curr * 1000 || 0);

    this.$.tts.querySelectorAll('audio').forEach((audio) => {
      audio.currentTime = curr || 0;
      audio.pause();
    })

    // RENABLE PLAY BUTTON
    if (curr) {
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

  zoomIn() {
    if (this.pixelsPerSecond <= 100) {
      this.pixelsPerSecond *= 2;
      this.updateTimeline();
    }
  }

  zoomRefresh() {
    this.pixelsPerSecond = 100;
    this.updateTimeline();
  }

  zoomOut() {
    if (this.pixelsPerSecond >= 100) {
      this.pixelsPerSecond /= 2;
      this.updateTimeline();
    }
  }
}

window.customElements.define('ssml-timeline', SsmlTimeline);
