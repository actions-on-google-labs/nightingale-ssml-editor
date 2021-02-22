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

// Importing modules exposes access to shadow root
import '@polymer/paper-button'
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js'
import '@polymer/paper-dialog/paper-dialog.js'
import '@polymer/paper-item/paper-item'
import '@polymer/paper-listbox'
import './ssml-block'
import './ssml-timeline'

import { PaperButtonElement } from '@polymer/paper-button';
import { PaperDialogElement } from '@polymer/paper-dialog/paper-dialog.js';
import { PaperDropdownMenuElement } from '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import { PaperItemElement } from '@polymer/paper-item/paper-item';
import { PaperListboxElement } from '@polymer/paper-listbox';

import { SsmlBlock } from './ssml-block'
import { SsmlTimeline } from './ssml-timeline'
import { voices, synthesize } from '../client-config';

export class App {
  blocks: HTMLCollectionOf<SsmlBlock>
  blockLibrary: HTMLElement
  btnPlay: PaperButtonElement
  btnSsml: PaperButtonElement
  btnDownload: PaperButtonElement
  btnCopy: HTMLElement
  btnStop: HTMLElement
  btnToolbox: HTMLElement
  exportModal: PaperDialogElement
  exportModalContent: HTMLElement
  loading: HTMLElement
  timeline: SsmlTimeline
  timelineContainer: HTMLElement
  ttsLocale: PaperDropdownMenuElement
  ttsVoices: PaperDropdownMenuElement
  zoomIn: HTMLElement
  zoomOut: HTMLElement
  zoomRefresh: HTMLElement
  trackingBlock?: {
    dataset: DOMStringMap,
    startX: number,
  }

  constructor() {
    // BIND METHODS
    this.activateEvents = this.activateEvents.bind(this);
    this.blockTrackStart = this.blockTrackStart.bind(this);
    this.blockTrackEnd = this.blockTrackEnd.bind(this);
    this.copySsml = this.copySsml.bind(this);
    this.downloadAudio = this.downloadAudio.bind(this);
    this.updateDropdowns = this.updateDropdowns.bind(this);

    // REGISTER ELEMENTS
    this.blocks = document.getElementsByClassName('ssml-block') as HTMLCollectionOf<SsmlBlock>;
    this.blockLibrary = document.getElementById('block-library')!;
    this.btnPlay = document.getElementById('btn-play')! as PaperButtonElement;
    this.btnSsml = document.getElementById('btn-ssml')! as PaperButtonElement;
    this.btnDownload = document.getElementById('btn-download')! as PaperButtonElement;
    this.btnCopy = document.getElementById('btn-copy')!;
    this.btnStop = document.getElementById('btn-stop')!;
    this.btnToolbox = document.getElementById('btn-toolbox')!;
    this.exportModal = document.getElementById('ssml')! as PaperDialogElement;
    this.exportModalContent = document.getElementById('ssml-gen')!;
    this.loading = document.getElementById('loading')!;
    this.timeline = document.querySelector('ssml-timeline') as SsmlTimeline;
    this.timelineContainer = document.getElementById('timeline-container')!;
    this.ttsLocale = document.getElementById('tts-locale')! as PaperDropdownMenuElement;
    this.ttsVoices = document.getElementById('tts-voices')! as PaperDropdownMenuElement;
    this.zoomIn = document.getElementById('btn-zoomi')!;
    this.zoomOut = document.getElementById('btn-zoomo')!;
    this.zoomRefresh = document.getElementById('btn-zoomr')!;

    // ACTIVATE EVENTS
    this.activateEvents();

    // UPDATE DROPDOWNS
    this.updateDropdowns();

    // HIDE LOADING SCREEN
    this.loading.className = 'loading is-hidden';

    window.addEventListener('load', () => {
      this.populateDropdowns();
    })
  }

  populateDropdowns() {
    const locales = Object.keys(voices)
    const localeDropdown =
      document.getElementById('tts-locale-lb') as PaperListboxElement
    localeDropdown.innerHTML = locales.map((locale) =>
      `<paper-item data-value="${locale}">
        ${voices[locale].title as string}
      </paper-item>`,
    ).join('')
    localeDropdown.selected = 0
  }

  activateEvents() {
    // LISTEN FOR LIBARY HANDLE
    this.btnToolbox.onclick = () => {
      if (this.blockLibrary.classList.contains('hidden')) {
        this.blockLibrary.classList.remove('hidden');
      } else {
        this.blockLibrary.classList.add('hidden');
      }
    };

    // DOWNLOAD BUTTON
    this.btnDownload.onclick = () => {
      this.downloadAudio();
    }

    // COPY BUTTON
    this.btnCopy.onclick = () => {
      this.copySsml();
    }

    // LISTEN FOR EXPORT BUTTON
    this.btnSsml.onclick = () => {
      this.exportModal.open();
      this.exportModalContent.innerText = this.timeline.getSsml();
    };

    // LISTEN FOR ZOOM IN
    this.zoomIn.onclick = () => {
      this.timeline.zoomIn();
    };

    // LISTEN FOR ZOOM OUT
    this.zoomOut.onclick = () => {
      this.timeline.zoomOut();
    };

    // LISTEN FOR ZOOM REFRESH
    this.zoomRefresh.onclick = () => {
      this.timeline.zoomRefresh();
    };

    // LISTEN FOR PLAY BUTTON
    this.btnPlay.onclick = () => {
      if (this.timeline.duration > 0) {
        this.btnPlay.disabled = true;
        this.btnPlay.classList.add('is-hidden');
        this.btnStop.classList.remove('is-hidden');

        this.timeline.play(() => {
          this.btnPlay.disabled = false;
          this.btnPlay.classList.remove('is-hidden');
          this.btnStop.classList.add('is-hidden');
        });
      }
    }

    // WARN WHEN LEAVING PAGE
    window.addEventListener('beforeunload', function(e) {
      const confirmationMessage =
        'If you leave this page your changes will be lost.';

      (e || window.event).returnValue = confirmationMessage; // Gecko + IE
      return confirmationMessage; // Gecko + Webkit, Safari, Chrome etc.
    });

    // LISTEN FOR PLAY BUTTON
    this.btnPlay.onclick = () => {
      this.btnPlay.disabled = true;
      this.btnPlay.classList.add('is-hidden');
      this.btnStop.classList.remove('is-hidden');

      this.timeline.play(() => {
        this.btnPlay.disabled = false;
        this.btnPlay.classList.remove('is-hidden');
        this.btnStop.classList.add('is-hidden');
      });
    }

    // LISTEN FOR STOP BUTTON
    this.btnStop.onclick = () => {
      this.btnPlay.disabled = false;
      this.btnPlay.classList.remove('is-hidden');
      this.btnStop.classList.add('is-hidden');

      this.timeline.stop(0);
    }

    // LISTEN FOR MOVING BLOCKS
    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks.item(i)!.ondrag = this.blockTrackStart;
      this.blocks.item(i)!.ondragend = this.blockTrackEnd;
    }

    // LOCALE
    this.ttsLocale.addEventListener('iron-select', () => {
      const listBox =
        document.getElementById('tts-voices-lb') as PaperListboxElement
      const selectedItem = this.ttsLocale.selectedItem as PaperItemElement
      const locale = selectedItem.dataset['value']!;
      const localeVoices = voices[locale].voices
      const html = localeVoices.map((voice) =>
        `<paper-item data-value="${voice}">${voice}</paper-item>`,
      ).join('')

      listBox.innerHTML = html
      this.ttsVoices.value = undefined;
      this.timeline.locale = locale;

      window.requestAnimationFrame(() => {
        listBox.selected = 0;
      })
    });

    // VOICES
    this.ttsVoices.addEventListener('iron-select', () => {
      const selectedItem = this.ttsVoices.selectedItem as PaperItemElement
      const voice = selectedItem.dataset['value']!;
      this.timeline.voice = voice;

      // REFRESH AUDIO FOR ALL BLOCKS
      this.timeline.resetAudio();
    });
  }

  blockTrackStart(event: DragEvent) {
    const srcElement = event.srcElement as HTMLElement
    this.trackingBlock = {
      dataset: srcElement.dataset,
      startX: event.x,
    };
  }

  blockTrackEnd(event: DragEvent) {
    if (this.trackingBlock && this.trackingBlock.startX !== event.x) {
      this.timeline.addBlock(this.trackingBlock, event.x - 320, event.y);
      this.trackingBlock = undefined;
    }
  }

  copySsml() {
    const copyText = this.exportModalContent.textContent;

    // CREATE A TEXT AREA AND POPULATE WITH SSML
    const textArea = document.createElement('textarea');
    textArea.textContent = copyText;

    // ADD TO DOM
    document.body.append(textArea);

    // COPY THE TEXT TO CLIPBOARD
    setTimeout(() => {
      textArea.select();
      document.execCommand('copy');

      // CLEAR OUT ELEMENT
      // document.removeChild(textArea);
    }, 25);
  }

  downloadAudio() {
    const timelineSsml = this.timeline.getSsml();
    // eslint-disable-next-line
    synthesize(timelineSsml, {
      languageCode: this.timeline.locale,
      name: this.timeline.voice,
    })
        .then((result: string) => {
          const downloadButton = document.createElement('a');
          downloadButton.setAttribute('href',
              `data:audio/wav;base64,${result}`);
          downloadButton.setAttribute('download',
              `nightingale-${new Date().toISOString()}.wav`);
          downloadButton.click()
        }).catch((e: Error) => {
          console.error(`Cannot create synthezied audio`, e)
        })
  }

  updateDropdowns() {
    // CHANGE STYLE OF DROPDOWNS THROUGH SHADOW DOM
    const menuButtonPaperInput = 
      this.ttsLocale.$['menuButton'].shadowRoot!
          .querySelector('slot')!
          .assignedElements()[0]
          .querySelector('paper-input')!

    menuButtonPaperInput.shadowRoot!.querySelector('label');
    menuButtonPaperInput.shadowRoot!.querySelector('label');
    menuButtonPaperInput.shadowRoot!.querySelector('iron-input');
    menuButtonPaperInput.shadowRoot!.querySelector('iron-input');
  }
}
