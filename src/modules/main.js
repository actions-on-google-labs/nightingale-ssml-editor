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
import { synthesize } from '../client-config';

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
      const locale = this.ttsLocale.selectedItem.dataset.value;
      let html;

      switch (locale) {
        case 'en-US':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="en-US-Wavenet-A">
              en-US-Wavenet-A
            </paper-item>
            <paper-item data-value="en-US-Wavenet-B">
              en-US-Wavenet-B
            </paper-item>
            <paper-item data-value="en-US-Wavenet-C">
              en-US-Wavenet-C
            </paper-item>
            <paper-item data-value="en-US-Wavenet-D">
              en-US-Wavenet-D
            </paper-item>
            <paper-item data-value="en-US-Wavenet-E">
              en-US-Wavenet-E
            </paper-item>
            <paper-item data-value="en-US-Wavenet-F">
              en-US-Wavenet-F
            </paper-item>
            <paper-item data-value="en-US-Standard-B">
              en-US-Standard-B
            </paper-item>
            <paper-item data-value="en-US-Standard-C">
              en-US-Standard-C
            </paper-item>
            <paper-item data-value="en-US-Standard-D">
              en-US-Standard-D
            </paper-item>
            <paper-item data-value="en-US-Standard-E">
              en-US-Standard-E
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'en-GB':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="en-GB-Wavenet-A">
              en-GB-Wavenet-A
            </paper-item>
            <paper-item data-value="en-GB-Wavenet-B">
              en-GB-Wavenet-B
            </paper-item>
            <paper-item data-value="en-GB-Wavenet-C">
              en-GB-Wavenet-C
            </paper-item>
            <paper-item data-value="en-GB-Wavenet-D">
              en-GB-Wavenet-D
            </paper-item>
            <paper-item data-value="en-GB-Standard-A">
              en-GB-Standard-A
            </paper-item>
            <paper-item data-value="en-GB-Standard-B">
              en-GB-Standard-B
            </paper-item>
            <paper-item data-value="en-GB-Standard-C">
              en-GB-Standard-C
            </paper-item>
            <paper-item data-value="en-GB-Standard-D">
              en-GB-Standard-D
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'en-AU':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="en-AU-Wavenet-A">
              en-AU-Wavenet-A
            </paper-item>
            <paper-item data-value="en-AU-Wavenet-B">
              en-AU-Wavenet-B
            </paper-item>
            <paper-item data-value="en-AU-Wavenet-C">
              en-AU-Wavenet-C
            </paper-item>
            <paper-item data-value="en-AU-Wavenet-D">
              en-AU-Wavenet-D
            </paper-item>
            <paper-item data-value="en-AU-Standard-A">
              en-AU-Standard-A
            </paper-item>
            <paper-item data-value="en-AU-Standard-B">
              en-AU-Standard-B
            </paper-item>
            <paper-item data-value="en-AU-Standard-C">
              en-AU-Standard-C
            </paper-item>
            <paper-item data-value="en-AU-Standard-D">
              en-AU-Standard-D
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'nl-NL':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="nl-NL-Wavenet-A">
              nl-NL-Wavenet-A
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'fr-FR':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="fr-FR-Wavenet-A">
              fr-FR-Wavenet-A
            </paper-item>
            <paper-item data-value="fr-FR-Wavenet-B">
              fr-FR-Wavenet-B
            </paper-item>
            <paper-item data-value="fr-FR-Wavenet-C">
              fr-FR-Wavenet-C
            </paper-item>
            <paper-item data-value="fr-FR-Wavenet-D">
              fr-FR-Wavenet-D
            </paper-item>
            <paper-item data-value="fr-FR-Standard-A">
              fr-FR-Standard-A
            </paper-item>
            <paper-item data-value="fr-FR-Standard-B">
              fr-FR-Standard-B
            </paper-item>
            <paper-item data-value="fr-FR-Standard-C">
              fr-FR-Standard-C
            </paper-item>
            <paper-item data-value="fr-FR-Standard-D">
              fr-FR-Standard-D
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'fr-CA':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="fr-CA-Wavenet-A">
              fr-CA-Wavenet-A
            </paper-item>
            <paper-item data-value="fr-CA-Wavenet-B">
              fr-CA-Wavenet-B
            </paper-item>
            <paper-item data-value="fr-CA-Wavenet-C">
              fr-CA-Wavenet-C
            </paper-item>
            <paper-item data-value="fr-CA-Wavenet-D">
              fr-CA-Wavenet-D
            </paper-item>
            <paper-item data-value="fr-CA-Standard-A">
              fr-CA-Standard-A
            </paper-item>
            <paper-item data-value="fr-CA-Standard-B">
              fr-CA-Standard-B
            </paper-item>
            <paper-item data-value="fr-CA-Standard-C">
              fr-CA-Standard-C
            </paper-item>
            <paper-item data-value="fr-CA-Standard-D">
              fr-CA-Standard-D
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'da-DK':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="da-DK-Wavenet-A">
              de-DE-Wavenet-A
            </paper-item>
            <paper-item data-value="da-DK-Standard-A">
              de-DE-Standard-A
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'de-DE':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="de-DE-Wavenet-A">
              de-DE-Wavenet-A
            </paper-item>
            <paper-item data-value="de-DE-Wavenet-B">
              de-DE-Wavenet-B
            </paper-item>
            <paper-item data-value="de-DE-Wavenet-C">
              de-DE-Wavenet-C
            </paper-item>
            <paper-item data-value="de-DE-Wavenet-D">
              de-DE-Wavenet-D
            </paper-item>
            <paper-item data-value="de-DE-Standard-A">
              de-DE-Standard-A
            </paper-item>
            <paper-item data-value="de-DE-Standard-B">
              de-DE-Standard-B
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'it-IT':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="it-IT-Wavenet-A">
              it-IT-Wavenet-A
            </paper-item>
            <paper-item data-value="it-IT-Standard-A">
              it-IT-Standard-A
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'ja-JP':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="ja-JP-Wavenet-A">
              ja-JP-Wavenet-A
            </paper-item>
            <paper-item data-value="ja-JP-Standard-A">
              ja-JP-Standard-A
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'ko-KR':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="ko-KR-Wavenet-A">
              ko-KR-Wavenet-A
            </paper-item>
            <paper-item data-value="ko-KR-Wavenet-B">
              ko-KR-Wavenet-B
            </paper-item>
            <paper-item data-value="ko-KR-Wavenet-C">
              ko-KR-Wavenet-C
            </paper-item>
            <paper-item data-value="ko-KR-Wavenet-D">
              ko-KR-Wavenet-D
            </paper-item>
            <paper-item data-value="ko-KR-Standard-A">
              ko-KR-Standard-A
            </paper-item>
            <paper-item data-value="ko-KR-Standard-B">
              ko-KR-Standard-B
            </paper-item>
            <paper-item data-value="ko-KR-Standard-C">
              ko-KR-Standard-C
            </paper-item>
            <paper-item data-value="ko-KR-Standard-D">
              ko-KR-Standard-D
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'nb-no':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="nb-NO-Wavenet-A">
              nb-NO-Wavenet-A
            </paper-item>
            <paper-item data-value="nb-NO-Wavenet-B">
              nb-NO-Wavenet-B
            </paper-item>
            <paper-item data-value="nb-NO-Wavenet-C">
              nb-NO-Wavenet-C
            </paper-item>
            <paper-item data-value="nb-NO-Wavenet-D">
              nb-NO-Wavenet-D
            </paper-item>
            <paper-item data-value="nb-no-Wavenet-E">
              nb-NO-Wavenet-E
            </paper-item>
            <paper-item data-value="nb-NO-Standard-A">
              nb-NO-Standard-A
            </paper-item>
            <paper-item data-value="nb-NO-Standard-B">
              nb-NO-Standard-B
            </paper-item>
            <paper-item data-value="nb-NO-Standard-C">
              nb-NO-Standard-C
            </paper-item>
            <paper-item data-value="nb-NO-Standard-D">
              nb-NO-Standard-D
            </paper-item>
            <paper-item data-value="nb-no-Standard-E">
              nb-NO-Standard-E
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'pl-PL':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="pl-PL-Wavenet-A">
              pl-PL-Wavenet-A
            </paper-item>
            <paper-item data-value="pl-PL-Wavenet-B">
              pl-PL-Wavenet-B
            </paper-item>
            <paper-item data-value="pl-PL-Wavenet-C">
              pl-PL-Wavenet-C
            </paper-item>
            <paper-item data-value="pl-PL-Wavenet-D">
              pl-PL-Wavenet-D
            </paper-item>
            <paper-item data-value="pl-PL-Wavenet-E">
              pl-PL-Wavenet-E
            </paper-item>
            <paper-item data-value="pl-PL-Standard-A">
              pl-PL-Standard-A
            </paper-item>
            <paper-item data-value="pl-PL-Standard-B">
              pl-PL-Standard-B
            </paper-item>
            <paper-item data-value="pl-PL-Standard-C">
              pl-PL-Standard-C
            </paper-item>
            <paper-item data-value="pl-PL-Standard-D">
              pl-PL-Standard-D
            </paper-item>
            <paper-item data-value="pl-PL-Standard-E">
              pl-PL-Standard-E
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'pt-BR':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="pt-BR-Wavenet-A">
              pt-BR-Wavenet-A
            </paper-item>
            <paper-item data-value="pt-BR-Standard-A">
              pt-BR-Standard-A
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'pt-PT':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="pt-PT-Wavenet-A">
              pt-PT-Wavenet-A
            </paper-item>
            <paper-item data-value="pt-PT-Wavenet-B">
              pt-PT-Wavenet-B
            </paper-item>
            <paper-item data-value="pt-PT-Wavenet-C">
              pt-PT-Wavenet-C
            </paper-item>
            <paper-item data-value="pt-PT-Wavenet-D">
              pt-PT-Wavenet-D
            </paper-item>
            <paper-item data-value="pt-PT-Standard-A">
              pt-PT-Standard-A
            </paper-item>
            <paper-item data-value="pt-PT-Standard-B">
              pt-PT-Standard-B
            </paper-item>
            <paper-item data-value="pt-PT-Standard-C">
              pt-PT-Standard-C
            </paper-item>
            <paper-item data-value="pt-PT-Standard-D">
              pt-PT-Standard-D
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'ru-RU':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="ru-RU-Wavenet-A">
              ru-RU-Wavenet-A
            </paper-item>
            <paper-item data-value="ru-RU-Wavenet-B">
              ru-RU-Wavenet-B
            </paper-item>
            <paper-item data-value="ru-RU-Wavenet-C">
              ru-RU-Wavenet-C
            </paper-item>
            <paper-item data-value="ru-RU-Wavenet-D">
              ru-RU-Wavenet-D
            </paper-item>
            <paper-item data-value="ru-RU-Standard-A">
              ru-RU-Standard-A
            </paper-item>
            <paper-item data-value="ru-RU-Standard-B">
              ru-RU-Standard-B
            </paper-item>
            <paper-item data-value="ru-RU-Standard-C">
              ru-RU-Standard-C
            </paper-item>
            <paper-item data-value="ru-RU-Standard-D">
              ru-RU-Standard-D
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'es-ES':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="es-ES-Standard-A">
              es-ES-Standard-A
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'sk-SK':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="sk-SK-Wavenet-A">
              sk-SK-Wavenet-A
            </paper-item>
            <paper-item data-value="sk-SK-Standard-A">
              sk-SK-Standard-A
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'sv-SE':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="sv-SE-Wavenet-A">
              sv-SE-Wavenet-A
            </paper-item>
            <paper-item data-value="sv-SE-Standard-A">
              sv-SE-Standard-A
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'tr-TR':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="tr-TR-Wavenet-A">
              tr-TR-Wavenet-A
            </paper-item>
            <paper-item data-value="tr-TR-Wavenet-B">
              tr-TR-Wavenet-B
            </paper-item>
            <paper-item data-value="tr-TR-Wavenet-C">
              tr-TR-Wavenet-C
            </paper-item>
            <paper-item data-value="tr-TR-Wavenet-D">
              tr-TR-Wavenet-D
            </paper-item>
            <paper-item data-value="tr-TR-Wavenet-E">
              tr-TR-Wavenet-E
            </paper-item>
            <paper-item data-value="tr-TR-Standard-A">
              tr-TR-Standard-A
            </paper-item>
            <paper-item data-value="tr-TR-Standard-B">
              tr-TR-Standard-B
            </paper-item>
            <paper-item data-value="tr-TR-Standard-C">
              tr-TR-Standard-C
            </paper-item>
            <paper-item data-value="tr-TR-Standard-D">
              tr-TR-Standard-D
            </paper-item>
            <paper-item data-value="tr-TR-Standard-E">
              tr-TR-Standard-E
            </paper-item>
          </paper-listbox>
          `;
          break;
        case 'uk-UA':
          html = `
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="uk-UA-Wavenet-A">
              uk-UA-Wavenet-A
            </paper-item>
            <paper-item data-value="uk-UA-Standard-A">
              uk-UA-Standard-A
            </paper-item>
          </paper-listbox>
          `;
          break;
      }

      this.ttsVoices.innerHTML = html;
      this.ttsVoices.value = undefined;
      this.timeline.locale = locale;
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
