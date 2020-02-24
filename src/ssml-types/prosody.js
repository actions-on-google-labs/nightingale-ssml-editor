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
 * @fileoverview Logic handler for <prosody> tag.
 */

const getSsml = (data) => {
  return `<prosody rate="${data.rate}" pitch="${data.pitch}">` +
    `${data.text}</prosody>`;
}

export default {
  getTimelineHtml: (data) => {
    return `<span class="audio-description">
            <img src="./images/dynamic.png" />
            ${data.text}
            </span>`;
  },
  getSsml,
  getOuterSsml: (data) => {
    return `<speak>${getSsml(data)}</speak>`;
  },
  getEditor: (data) => {
    return {
      html: `
        <paper-input data-attr="text" always-float-label
          label="Say something" value="${data.text}">
        </paper-input>
        <strong>Speech Rate</strong>
        <paper-dropdown-menu data-attr="rate" value="${data.rate}">
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="x-slow">Extra Slow</paper-item>
            <paper-item data-value="slow">Slow</paper-item>
            <paper-item data-value="medium">Medium</paper-item>
            <paper-item data-value="fast">Fast</paper-item>
            <paper-item data-value="x-fast">Extra Fast</paper-item>
          </paper-listbox>
        </paper-dropdown-menu><br>
        <strong>Pitch</strong>
        <paper-dropdown-menu data-attr="pitch" value="${data.pitch}">
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="x-low">Extra Low</paper-item>
            <paper-item data-value="low">Low</paper-item>
            <paper-item data-value="medium">Medium</paper-item>
            <paper-item data-value="high">High</paper-item>
            <paper-item data-value="x-high">Extra High</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      `,
      onOpen: () => {},
    }
  },
}
