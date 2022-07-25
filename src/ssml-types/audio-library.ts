/**
  Copyright 2020 Google Inc. All rights reserved.

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
/**
 * @fileoverview Logic handler for <audio> tag with the sound library.
 */

import {Data, SsmlType} from './ssml-type'

interface LibraryData extends Data {
  src: string
  alt: string
  clipBegin?: number
  clipEnd?: number
}

const getSsml = (data: LibraryData) => {
  return `<audio src="${data.src}" ` +
    (data.clipBegin ? `clipBegin="${data.clipBegin}s"` : '') +
    (data.clipEnd ? `clipEnd="${data.clipEnd}s"` : '') +
    `>${data.alt}</audio>`;
}

export default {
  getTimelineHtml: (data: LibraryData) => {
    return `<strong class="audio-description">
            <img src="./images/library.png" />
            ${data.alt}
            </strong>`;
  },
  getSsml,
  getOuterSsml: (data: LibraryData) => {
    return getSsml(data);
  },
  getEditor: (data: LibraryData, soundLibrary) => {
    const datalistValues = soundLibrary
        .map((sound) => `<option value="${sound.sound}">\n`)
        .join('\n')
    return {
      html: `
      <input data-attr="alt" always-float-label
        label="Search for a sound effect" value="${data.alt}"
        type="search" list="sound-library"
        style="border: none; border-bottom: solid 1px black;
          font-size: 11pt;">
      </input>
      <paper-input data-attr="clipBegin" always-float-label
        label="Clip start (s)" auto-validate
        error-message="Requires a positive time"
        pattern="[\\d.]*" value="${data.clipBegin || 0}">
      </paper-input>
      <paper-input data-attr="clipEnd" always-float-label
        label="Clip end (s)" auto-validate
        error-message="Requires a positive time"
        pattern="[\\d.]*" value="${data.clipEnd || 0}">
      </paper-input>
      <datalist id="sound-library">
        ${datalistValues}
      </datalist>
      `,
      onOpen: (thisBlock, timeline, index, soundLibrary) => {
        // Add a search listener
        document.getElementById('block-editor-ui')!
            .querySelector('input[data-attr="alt"]')!
            .addEventListener('input', (event: Event) => {
              // Search sound library
              const target = event.target as HTMLInputElement
              const soundValue = target.value.toLowerCase()
              const sound = soundLibrary
                  .filter((s) => s.sound.toLowerCase() === soundValue)[0]
              if (!sound) return;

              thisBlock.data['alt'] = sound.sound;
              thisBlock.data['src'] = sound.url;
              timeline.updateTimeline();
              timeline.genAudio(index, timeline.genSsml(thisBlock));
            });
      },
    }
  },
} as SsmlType<LibraryData>
