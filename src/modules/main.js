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
// eslint-disable-next-line
import {paperDropdownMenu} from '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
// eslint-disable-next-line
import {paperDialog} from "@polymer/paper-dialog/paper-dialog.js";

import './ssml-block'
import './ssml-timeline'
import { synthesize, voices } from '../client-config';

export default class App {
  constructor() {
    // BIND METHODS
    this.activateEvents = this.activateEvents.bind(this);
    this.blockTrackStart = this.blockTrackStart.bind(this);
    this.blockTrackEnd = this.blockTrackEnd.bind(this);
    this.copySsml = this.copySsml.bind(this);
    this.downloadAudio = this.downloadAudio.bind(this);
    this.updateDropdowns = this.updateDropdowns.bind(this);

    // REGISTER ELEMENTS
    this.blocks = document.getElementsByClassName('ssml-block');
    this.blockLibrary = document.getElementById('block-library');
    this.btnNews = document.getElementById('btn-news');
    this.btnPlay = document.getElementById('btn-play');
    this.btnSsml = document.getElementById('btn-ssml');
    this.btnDownload = document.getElementById('btn-download');
    this.btnCopy = document.getElementById('btn-copy');
    this.btnStop = document.getElementById('btn-stop');
    this.btnToolbox = document.getElementById('btn-toolbox');
    this.exportModal = document.getElementById('ssml');
    this.exportModalContent = document.getElementById('ssml-gen');
    this.loading = document.getElementById('loading');
    this.news = document.getElementById('news');
    this.timeline = document.querySelector('ssml-timeline');
    this.timelineContainer = document.getElementById('timeline-container');
    this.ttsLocale = document.getElementById('tts-locale');
    this.ttsVoices = document.getElementById('tts-voices');
    this.zoomIn = document.getElementById('btn-zoomi');
    this.zoomOut = document.getElementById('btn-zoomo');
    this.zoomRefresh = document.getElementById('btn-zoomr');

    // REGISTER VARS
    this.trackingBlock = null;

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
    const localeDropdown = document.getElementById('tts-locale-lb')
    localeDropdown.innerHTML = locales.map((locale) =>
      `<paper-item data-value="${locale}">
        ${voices[locale].title}
      </paper-item>`,
    ).join('')
    localeDropdown.selected = 0
    document.getElementById('tts-voices-lb').selected = 0
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

    // LISTEN FOR NEWS BUTTON
    this.btnNews.onclick = () => {
      this.news.open();
    };

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

      this.timeline.stop();
    }

    // LISTEN FOR MOVING BLOCKS
    for (let i = 0; i < this.blocks.length; i++) {
      this.blocks.item(i).ondrag = this.blockTrackStart;
      this.blocks.item(i).ondragend = this.blockTrackEnd;
    }

    // LOCALE
    this.ttsLocale.addEventListener('iron-select', () => {
      const listBox = document.getElementById('tts-voices-lb')
      const locale = this.ttsLocale.selectedItem.dataset.value;
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
      const voice = this.ttsVoices.selectedItem.dataset.value;
      this.timeline.voice = voice;

      // REFRESH AUDIO FOR ALL BLOCKS
      this.timeline.resetAudio();
    });
  }

  blockTrackStart(event) {
    this.trackingBlock = {
      dataset: event.srcElement.dataset,
      startX: event.x,
    };
  }

  blockTrackEnd(event) {
    if (this.trackingBlock && this.trackingBlock !== event.x) {
      this.timeline.addBlock(this.trackingBlock, event.x - 320, event.y);
      this.trackingBlock = null;
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
        .then((result) => {
          const downloadButton = document.createElement('a');
          downloadButton.setAttribute('href',
              `data:audio/wav;base64,${result}`);
          downloadButton.setAttribute('download',
              `nightingale-${new Date().toISOString()}.wav`);
          downloadButton.click()
        }).catch((e) => {
          console.error(`Cannot create synthezied audio`, e)
        })
  }

  updateDropdowns() {
    // CHANGE STYLE OF DROPDOWNS THROUGH SHADOW DOM
    this.ttsLocale.$.menuButton.shadowRoot
        .querySelector('slot')
        .assignedNodes()[0]
        .querySelector('paper-input')
        .shadowRoot
        .querySelector('label');


    this.ttsVoices.$.menuButton.shadowRoot
        .querySelector('slot')
        .assignedNodes()[0]
        .querySelector('paper-input')
        .shadowRoot
        .querySelector('label');

    this.ttsLocale.$.menuButton.shadowRoot
        .querySelector('slot')
        .assignedNodes()[0]
        .querySelector('paper-input')
        .shadowRoot
        .querySelector('iron-input');

    this.ttsVoices.$.menuButton.shadowRoot
        .querySelector('slot')
        .assignedNodes()[0]
        .querySelector('paper-input')
        .shadowRoot
        .querySelector('iron-input');
  }
}
