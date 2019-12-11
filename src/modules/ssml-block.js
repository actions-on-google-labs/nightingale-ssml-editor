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

import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import {appToolbar} from "@polymer/app-layout/app-toolbar/app-toolbar.js";
import {paperCard} from "@polymer/paper-card/paper-card.js";
import {ironIcons} from "@polymer/iron-icons/iron-icons.js";
import {paperDropdownMenu} from "@polymer/paper-dropdown-menu/paper-dropdown-menu.js";
import {paperMenuButton} from "@polymer/paper-menu-button/paper-menu-button.js";
import {paperListbox} from "@polymer/paper-listbox/paper-listbox.js";
import {paperItem} from "@polymer/paper-item/paper-item.js";
import {paperItemBody} from "@polymer/paper-item/paper-item-body.js";
import {paperButton} from "@polymer/paper-button/paper-button.js";
import {paperToast} from "@polymer/paper-toast/paper-toast.js";
import {paperDialog} from "@polymer/paper-dialog/paper-dialog.js";
import {paperToolbar} from "@polymer/paper-toolbar/paper-toolbar.js";
import {paperIconButton} from "@polymer/paper-icon-button/paper-icon-button.js";
import {paperSlider} from "@polymer/paper-slider/paper-slider.js";

/**
 * @customElement
 * @polymer
 */

class SsmlBlock extends PolymerElement {
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
        value: 0,
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
        value: 0,
        reflectToAttribute: true,
      },
      index: {
        type: Number,
        value: 0,
        reflectToAttribute: true,
      },
      audioUpdated: {
        type: Number,
        value: 0,
      },
      // TODO pull from a JSON file elsewhere?
      // https://developers.google.com/actions/tools/sound-library/
      soundLibrary: {
        type: Array,
        value: [{
          sound: 'Alarm Clock',
          url: 'https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg'
        }, {
          sound: 'Assorted Computer Sounds',
          url: 'https://actions.google.com/sounds/v1/alarms/assorted_computer_sounds.ogg'
        }, {
          sound: 'Beep Short',
          url: 'https://actions.google.com/sounds/v1/alarms/beep_short.ogg'
        }]
      }
    };
  }

  copy(block) {
    this.data = block.data;
    this.time = block.time;
    this.type = block.type;
    this.index = block.id;
    this.audioUpdated = block.audioUpdated;

    this.renderHtml();
  }

  getHtml() {
    let html = '';

    switch (this.type) {
      case 'p': html = `<span class="audio-description"><img src="/images/mic.png"/>${this.data.text}</span>`; break;
      case 'emphasis': html = `<strong class="audio-description"><img src="/images/speaker.png"/>${this.data.text}</strong>`;break;
      case 'sub': html = `<span class="audio-description"><img src="/images/speech.png"/>${this.data.alias} (${this.data.text})</span>`; break;
      case 'say-as': html = `<span class="audio-description"><img src="/images/say.png"/>${this.data.text} (say as ${this.data['interpret-as']})</span>`; break;
      case 'say-as-date': html = `<span class="audio-description"><img src="/images/date.png"/>${this.data.text}</span>`; break;
      case 'say-as-time': html = `<span class="audio-description"><img src="/images/time.png"/>${this.data.text}</span>`; break;
      case 'prosody': html = `<span class="audio-description"><img src="/images/dynamic.png"/>${this.data.text}</span>`; break;
      case 'audio': html = `<strong class="audio-description"><img src="/images/audio.png"/> ${this.data.alt}</strong>`; break;
      case 'audio-library': html = `<strong class="audio-description"><img src="/images/library.png"/> ${this.data.alt}</strong>`; break;
      default: case 'p': html = `<span class="audio-description">${this.data.text}</span>`;
    }

    // ADD OPTIONS BUTTONS
    html = html + `
      <div class="audio-options" part="audio-options">
        <button class="audio-button edit-button" id="btnEdit" data-index="${this.index}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </button>

        <svg class="audio-button close-button" id="btnDelete" data-index="${this.index}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </div>
    `;

    return html;
  }

  renderHtml() {
    if(this.$ && this.$.blockDiv) {
      this.$.blockDiv.innerHTML = this.getHtml();
    }
  }

  getSsml() {
    let ssml = '';

    switch (this.type) {
      case 'p': ssml = `<p>${this.data.text}</p>`; break;
      case 'emphasis': ssml = `<emphasis level="${this.data.level}">${this.data.text}</emphasis>`; break;
      case 'sub': ssml = `<sub alias="${this.data.alias}">${this.data.text}</sub>`; break;
      case 'prosody': ssml = `<prosody rate="${this.data.rate}" pitch="${this.data.pitch}">${this.data.text}</prosody>`; break;
      case 'say-as': ssml = `<say-as interpret-as="${this.data['interpret-as']}">${this.data.text}</say-as>`; break;
      case 'say-as-date': ssml =  `<say-as interpret-as="date" format="${this.data.format}" detail="${this.data.detail}">${this.data.text}</say-as>`; break;
      case 'say-as-time': ssml =  `<say-as interpret-as="time" format="${this.data.format}" detail="${this.data.detail}">${this.data.text}</say-as>`; break;
      case 'audio': `<audio src="${this.data.src}" ${this.data.clipBegin ? `clipBegin="${this.data.clipBegin}s"` : ''} ${this.data.clipEnd ? `clipEnd="${this.data.clipEnd}s"` : ''}>${this.data.alt}</audio>`; break;
      case 'audio-library': ssml = `<audio src="${this.data.src}" ${this.data.clipBegin ? `clipBegin="${this.data.clipBegin}s"` : ''} ${this.data.clipEnd ? `clipEnd="${this.data.clipEnd}s"` : ''}>${this.data.alt}</audio>`; break;
      case 'break': ssml = `<break time="${this.data.time}s" />`; break;
      default: ssml = `<p>${this.data.text}</p>`;
    }

    return ssml;
  }

  getWrappedSsml() {
    let wrappedSsml;

    switch (this.type) {
      case 'p': wrappedSsml = `<speak>${this.getSsml()}</speak>`; break;
      case 'emphasis': wrappedSsml = `<speak>${this.getSsml()}</speak>`; break;
      case 'sub': wrappedSsml = `<speak>${this.getSsml()}</speak>`; break;
      case 'prosody': wrappedSsml = `<speak>${this.getSsml()}</speak>`; break;
      case 'say-as': wrappedSsml = `<speak>${this.getSsml()}</speak>`; break;
      case 'say-as-date': wrappedSsml = `<speak>${this.getSsml()}</speak>`; break;
      case 'say-as-time': wrappedSsml = `<speak>${this.getSsml()}</speak>`; break;
      case 'audio': wrappedSsml = `<audio src="${this.data.src}"${this.data.clipBegin ? `clipBegin="${this.data.clipBegin}s"` : ''}${this.data.clipEnd ? `clipEnd="${this.data.clipEnd}s"` : ''}>${this.data.alt}</audio>`; break;
      case 'audio-library': wrappedSsml = `<audio src="${this.data.src}"${this.data.clipBegin ? `clipBegin="${this.data.clipBegin}s"` : ''}${this.data.clipEnd ? `clipEnd="${this.data.clipEnd}s"` : ''}>${this.data.alt}</audio>`; break;
      case 'break': wrappedSsml = `<speak><break time="${this.data.time}s" /></speak>`; break;
      default: wrappedSsml = `<speak>${this.getSsml()}</speak>`; break;
    }

    return wrappedSsml;
  }

  getAudioConfig(ssmlContent) {
    const content = ssmlContent || "<p>hello world</p>";

    return {
      audioConfig: {
        audioEncoding: "LINEAR16",
        pitch: "0.00",
        speakingRate: "1.00"
      },
      input: {
        /* Wrap in <speak> tag to render correctly */
        ssml: `<speak>${content}</speak>`
      },
      voice: {
        languageCode: "en-US",
        name: "en-US-Wavenet-D"
      }
    };
  }

  editBtn() {
    return this.$.blockDiv.querySelector('#btnEdit')
  }

  deleteBtn() {
    return this.$.blockDiv.querySelector('#btnDelete')
  }

  openEditor(timeline) {
    let html = '';
    switch (this.type) {
      case 'p':
        html = `<paper-input data-attr="text" always-float-label label="Say something" value="${this.data.text}"></paper-input>`
        break;

      case 'emphasis':
        html = `
          <paper-input data-attr="text" always-float-label label="Say something" value="${this.data.text}"></paper-input>
          <strong>Emphasis Level</strong>
          <paper-dropdown-menu data-attr="level" value="${this.data.level}">
            <paper-listbox slot="dropdown-content" class="dropdown-content">
              <paper-item data-value="reduced">Reduced</paper-item>
              <paper-item data-value="none">None</paper-item>
              <paper-item data-value="moderate">Moderate</paper-item>
              <paper-item data-value="strong">Strong</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
        `
        break;

      case 'sub':
        html = `<paper-input data-attr="alias" always-float-label label="Say something" value="${this.data.alias}"></paper-input>
          <paper-input data-attr="text" always-float-label label="Shortened" value="${this.data.text}"></paper-input>`
        break;

      case 'prosody':
        html = `<paper-input data-attr="text" always-float-label label="Say something" value="${this.data.text}"></paper-input>
          <strong>Speech Rate</strong>
          <paper-dropdown-menu data-attr="rate" value="${this.data.rate}">
            <paper-listbox slot="dropdown-content" class="dropdown-content">
              <paper-item data-value="x-slow">Extra Slow</paper-item>
              <paper-item data-value="slow">Slow</paper-item>
              <paper-item data-value="medium">Medium</paper-item>
              <paper-item data-value="fast">Fast</paper-item>
              <paper-item data-value="x-fast">Extra Fast</paper-item>
            </paper-listbox>
          </paper-dropdown-menu><br>
          <strong>Pitch</strong>
          <paper-dropdown-menu data-attr="pitch" value="${this.data.pitch}">
            <paper-listbox slot="dropdown-content" class="dropdown-content">
              <paper-item data-value="x-low">Extra Low</paper-item>
              <paper-item data-value="low">Low</paper-item>
              <paper-item data-value="medium">Medium</paper-item>
              <paper-item data-value="high">High</paper-item>
              <paper-item data-value="x-high">Extra High</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
        `
        break;

      case 'say-as':
        html = `<paper-input data-attr="text" always-float-label label="Say something" value="${this.data.text}"></paper-input>
          <strong>Interpret As</strong>
          <paper-dropdown-menu data-attr="interpret-as" value="${this.data['interpret-as']}">
            <paper-listbox slot="dropdown-content" class="dropdown-content">
              <paper-item data-value="cardinal">Cardinal</paper-item>
              <paper-item data-value="ordinal">Ordinal</paper-item>
              <paper-item data-value="characters">Characters</paper-item>
              <paper-item data-value="fraction">Fraction</paper-item>
              <paper-item data-value="expletive">Expletive</paper-item>
              <paper-item data-value="unit">Unit</paper-item>
              <paper-item data-value="verbtaim">Verbatim</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>
        `
        break;

      case 'say-as-date':
        html = `<paper-input data-attr="text" always-float-label label="Date" value="${this.data.text}"></paper-input>
          <paper-input data-attr="format" always-float-label label="Date format" value="${this.data.format}"></paper-input>
          <strong>Say As</strong>
          <paper-dropdown-menu data-attr="detail" value="${this.data.detail}">
            <paper-listbox slot="dropdown-content" class="dropdown-content">
              <paper-item data-value="1">The {ordinal day} of {month}, {year}</paper-item>
              <paper-item data-value="2">{Month} {day}, {year}</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>

          <p>Supported format characters are y, m, d for year, month, and day (of the month) respectively</p>
        `
        break;

      case 'say-as-time':
        html = `<paper-input data-attr="text" always-float-label label="Time" value="${this.data.text}"></paper-input>
          <paper-input data-attr="format" always-float-label label="Time format" value="${this.data.format}"></paper-input>
          <strong>Say As</strong>
          <paper-dropdown-menu data-attr="detail" value="${this.data.detail}">
            <paper-listbox slot="dropdown-content" class="dropdown-content">
              <paper-item data-value="1">24-Hour Time</paper-item>
              <paper-item data-value="2">12-Hour Time</paper-item>
            </paper-listbox>
          </paper-dropdown-menu>

          <p>Supported format characters are h, m, s, Z, 12, 24 for hour, minute, second, time zone, 12-hr, and 24-hr time respectively</p>
        `
        break;

      case 'audio':
        html = `<paper-input data-attr="src" always-float-label label="Audio URL" value="${this.data.src}" auto-validate error-message="Requires a valid URL" pattern="https://.*"></paper-input>
         <paper-input data-attr="alt" always-float-label label="Description" value="${this.data.alt}"></paper-input>
         <paper-input data-attr="clipBegin" always-float-label label="Clip start (s)" auto-validate error-message="Requires a positive time" pattern="[\\d.]*" value="${this.data.clipBegin || 0}"></paper-input>
         <paper-input data-attr="clipEnd" always-float-label label="Clip end (s)" auto-validate error-message="Requires a positive time" pattern="[\\d.]*" value="${this.data.clipEnd || 0}"></paper-input>
          `
        break;

      case 'audio-library':
        html = `
          <input data-attr="alt" always-float-label label="Search for a sound effect" value="${this.data.alt}" type="search" list="sound-library" style="border: none; border-bottom: solid 1px black; font-size: 11pt;"></input>
          <paper-input data-attr="clipBegin" always-float-label label="Clip start (s)" auto-validate error-message="Requires a positive time" pattern="[\\d.]*" value="${this.data.clipBegin || 0}"></paper-input>
          <paper-input data-attr="clipEnd" always-float-label label="Clip end (s)" auto-validate error-message="Requires a positive time" pattern="[\\d.]*" value="${this.data.clipEnd || 0}"></paper-input>
          <datalist id="sound-library">
            <option value="Alarm Clock">
            <option value="Assorted Computer Sounds">
            <option value="Beep Short">
          </datalist>
          `
        window.requestAnimationFrame(() => {
          // Add a search listener
          document.getElementById('block-editor-ui')
            .querySelector('input[data-attr="alt"]')
            .addEventListener('input', (event) => {
              // Search sound library
              console.log(event);
              const sound = this.soundLibrary.filter(s => s.sound.toLowerCase() === event.path[0].value.toLowerCase())[0]
              console.log('Found', sound);
              if (!sound) return;
              timeline.blocks[this.index].data['alt'] = sound.sound;
              timeline.blocks[this.index].data['src'] = sound.url;
              timeline.updateTimeline();
              timeline.genAudio(this.index, timeline.genSsml(timeline.blocks[this.index]));
            });
        });
        break;
    }

    document.getElementById('block-editor-ui').innerHTML = html;
    document.getElementById('block-editor').open();
    window.requestAnimationFrame(() => {
      document.getElementById('block-editor-ui')
          .querySelectorAll('paper-input')
          .forEach(input => {
        input.addEventListener('input', () => {
          // Map directly onto the timeline on each change
          timeline.blocks[this.index].data[input.dataset.attr] = input.value;
          timeline.updateTimeline();
          timeline.genAudio(this.index, timeline.genSsml(timeline.blocks[this.index]));
        });
      });

      document.getElementById('block-editor-ui')
          .querySelectorAll('paper-dropdown-menu')
          .forEach(input => {
        input.addEventListener('iron-select', () => {
          // Map directly onto the timeline on each change
          const value = input.selectedItem.dataset.value;
          timeline.blocks[this.index].data[input.dataset.attr] = value;
          timeline.updateTimeline();
          timeline.genAudio(this.index, timeline.genSsml(timeline.blocks[this.index]));
        });
      });
    });
  }
}

window.customElements.define('ssml-block', SsmlBlock);
