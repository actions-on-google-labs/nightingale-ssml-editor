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
 * @fileoverview Logic handler for <say-as interpret-as="*"> tag.
 */

const getSsml = (data) => {
  return `<say-as interpret-as="${data['interpret-as']}">` +
    `${data.text}</say-as>`;
}

export default {
  getTimelineHtml: (data) => {
    return `<span class="audio-description">
            <img src="./images/say.png"/>
            ${data.text}
            (say as ${data['interpret-as']})
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
        <strong>Interpret As</strong>
        <paper-dropdown-menu data-attr="interpret-as"
            value="${data['interpret-as']}">
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
      `,
      onOpen: () => {},
    }
  },
}
