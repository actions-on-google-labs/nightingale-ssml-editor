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
import ssmlTypes from '../ssml-types'

// Importing modules exposes access to shadow root
// eslint-disable-next-line
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
// eslint-disable-next-line
import '@polymer/paper-card/paper-card.js';
// eslint-disable-next-line
import '@polymer/iron-icons/iron-icons.js';
// eslint-disable-next-line
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import {PaperDropdownMenuElement} from '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
// eslint-disable-next-line
import '@polymer/paper-menu-button/paper-menu-button.js';
// eslint-disable-next-line
import '@polymer/paper-listbox/paper-listbox.js';
// eslint-disable-next-line
import '@polymer/paper-item/paper-item.js'
import {PaperItemElement} from "@polymer/paper-item/paper-item.js";
// eslint-disable-next-line
import '@polymer/paper-item/paper-item-body.js';
// eslint-disable-next-line
import '@polymer/paper-button/paper-button.js';
// eslint-disable-next-line
import '@polymer/paper-toast/paper-toast.js';
// eslint-disable-next-line
import '@polymer/paper-dialog/paper-dialog.js'
import {PaperDialogElement} from "@polymer/paper-dialog/paper-dialog.js";
// eslint-disable-next-line
import '@polymer/paper-toolbar/paper-toolbar.js';
// eslint-disable-next-line
import '@polymer/paper-icon-button/paper-icon-button.js';
// eslint-disable-next-line
import '@polymer/paper-slider/paper-slider.js';
import '@polymer/paper-input/paper-input.js'
import {PaperInputElement} from "@polymer/paper-input/paper-input.js";

import { Data, SoundLibrary } from '../ssml-types/ssml-type';
import SsmlTimeline, { TimelineBlock } from './ssml-timeline';

/**
 * @customElement
 * @polymer
 */

export default class SsmlBlock extends PolymerElement {
  data: Data = {}
  time: number = 0
  type: string = 'p'
  track: number = 0
  index: number = 0
  audioUpdated: number = 0
  // https://developers.google.com/actions/tools/sound-library/
  soundLibrary?: SoundLibrary
  blockEditorUi?: HTMLElement
  blockEditor?: PaperDialogElement

  static get template() {
    return html`
      <style>
        :host(.timeline-block) {
          color: #3268D6;
        }

        .audio-description {
          max-width: 100%;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
          line-height: 34px;
          align-items: center;
        }

        .audio-description img {
          margin: 8px 4px 0 8px;
          max-width: 16px;
          max-height: 16px;
          float: left;
        }


        :host(.pending) {
          opacity: .5;
          color: #FFF;
          background-color: #FF8F00 !important;
        }

        :host(.overlapping) {
          color: #FFF;
          background: #F50057 !important;
        }

        :host:hover {
          background: #F50057 !important;
        }

        .audio-options .audio-button {
          background: rgba(255, 255, 255, .24);
          border: none;
          font-size: 18px;
          border-radius: 200px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all .3s;
          outline: none;
          position: absolute;
          height: 28px;
          width: 28px;
          padding: 0;
          text-align: center;
          top: 2px;
          z-index: 1;
        }

        .audio-options .close-button {
          right: 8px;
          top: 8px;
          background: #EEE;
          color: #3268D6;
          fill: #3268D6;
          height: 18px;
          width: 18px;
        }

        .audio-options .edit-button {
          left: 2px;
          background: #3268D6;
          color: #FFF;
        }

        .audio-options .edit-button svg {
          fill: #FFF;
          width: 18px;
        }

        .audio-options button:hover {
          background: #FFF:
          color:#00ACEA;
        }

        .audio-container .audio-options {
          display: none;
        }

        .audio-container:hover .audio-options {
          display: block;
        }
      </style>

      <div id='blockDiv' class="audio-container"></div>
    `;
  }

  static get properties() {
    return {
      data: {
        type: Object,
        value: {},
        observer: 'renderHtml',
      },
      time: {
        type: Number,
        reflectToAttribute: true,
      },
      type: {
        type: String,
        value: 'p',
        observer: 'renderHtml',
        reflectToAttribute: true,
      },
      track: {
        type: Number,
        reflectToAttribute: true,
      },
      index: {
        type: Number,
        reflectToAttribute: true,
      },
    };
  }

  ready() {
    super.ready();
    // eslint-disable-next-line
    this.soundLibrary = require('../sound-library.json')
    this.blockEditorUi = document.getElementById('block-editor-ui')!
    this.blockEditor = document.getElementById('block-editor')! as PaperDialogElement
  }

  copy(block: TimelineBlock) {
    this.data = block.data;
    this.time = block.time;
    this.type = block.type;
    this.index = block.id;
    this.audioUpdated = block.audioUpdated;

    this.renderHtml();
  }

  getHtml() {
    const html = ssmlTypes[this.type].getTimelineHtml(this.data);

    // ADD OPTIONS BUTTONS
    const audioOptions =
    `<div class="audio-options" part="audio-options">
        <button class="audio-button edit-button" id="btnEdit"
            data-index="${this.index}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </button>

        <svg class="audio-button close-button" id="btnDelete" data-index="${this.index}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </div>
    `;

    return html + audioOptions;
  }

  renderHtml() {
    if (this.$ && this.$['blockDiv']) {
      this.$['blockDiv'].innerHTML = this.getHtml();
    }
  }

  getSsml() {
    return ssmlTypes[this.type].getSsml(this.data);
  }

  getWrappedSsml() {
    return ssmlTypes[this.type].getOuterSsml(this.data);
  }

  getAudioConfig(ssmlContent: string) {
    const content = ssmlContent || '';

    return {
      audioConfig: {
        audioEncoding: 'LINEAR16',
        pitch: '0.00',
        speakingRate: '1.00',
      },
      input: {
        /* Wrap in <speak> tag to render correctly */
        ssml: `<speak>${content}</speak>`,
      },
      voice: {
        languageCode: 'en-US',
        name: 'en-US-Wavenet-D',
      },
    };
  }

  editBtn() {
    return this.$['blockDiv'].querySelector('#btnEdit')! as HTMLButtonElement
  }

  deleteBtn() {
    return this.$['blockDiv'].querySelector('#btnDelete')! as HTMLElement
  }

  openEditor(timeline: SsmlTimeline) {
    const {html, onOpen} = ssmlTypes[this.type].getEditor(this.data,
        this.soundLibrary!);

    this.blockEditorUi!.innerHTML = html;
    this.blockEditor!.open();
    window.requestAnimationFrame(() => {
      // Execute any additional logic after editor dialog box starts
      onOpen(timeline.blocks[this.index], timeline, this.index,
          this.soundLibrary!);

      this.blockEditorUi!.querySelectorAll('paper-input')
          .forEach((input: PaperInputElement) => {
            input.addEventListener('input', () => {
              // Map directly onto the timeline on each change
              const attr = input.dataset['attr']!
              timeline.blocks[this.index].data[attr] = input.value!;
              timeline.updateTimeline();
              timeline.genAudio(this.index);
            });
          });

      this.blockEditorUi!.querySelectorAll('paper-dropdown-menu')
          .forEach((input: PaperDropdownMenuElement) => {
            input.addEventListener('iron-select', () => {
              // Map directly onto the timeline on each change
              const selectedItem = input.selectedItem as PaperItemElement
              const value = selectedItem.dataset['value'];
              const attr = input.dataset['attr']!
              timeline.blocks[this.index].data[attr] = value;
              timeline.updateTimeline();
              timeline.genAudio(this.index);
            });
          });
    });
  }
}

window.customElements.define('ssml-block', SsmlBlock);
