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
 * @fileoverview Logic handler for <audio> tag.
 */

const getSsml = (data) => {
  return `<audio src="${data.src}" ` +
    (data.clipBegin ? `clipBegin="${data.clipBegin}s"` : '') +
    (data.clipEnd ? `clipEnd="${data.clipEnd}s"` : '') +
    `>${data.alt}</audio>`;
}

export default {
  getTimelineHtml: (data) => {
    return `<strong class="audio-description">
            <img src="./images/audio.png" />
            ${data.alt}
            </strong>`;
  },
  getSsml,
  getOuterSsml: (data) => {
    return getSsml(data);
  },
  getEditor: (data) => {
    return {
      html: `
        <paper-input data-attr="src" always-float-label label="Audio URL"
          value="${data.src}" auto-validate
          error-message="Requires a valid URL" pattern="https://.*">
        </paper-input>
        <paper-input data-attr="alt" always-float-label
          label="Description" value="${data.alt}">
        </paper-input>
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
      `,
      onOpen: () => {},
    }
  },
}
