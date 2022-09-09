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
 * @fileoverview Logic handler for <emphasis> tag.
 */

import {Data, SsmlType} from './ssml-type'

interface EmphasisData extends Data {
  level: 'reduced' | 'none' | 'moderate' | 'strong'
  text: string
}

const getSsml = (data: EmphasisData) => {
  return `<emphasis level="${data.level}">` +
    `${data.text}</emphasis>`;
}

export default {
  getTimelineHtml: (data: EmphasisData) => {
    return `<strong class="audio-description">
            <i class="material-icons">volume_up</i>
            ${data.text}
            </strong>`;
  },
  getSsml,
  getOuterSsml: (data: EmphasisData) => {
    return `<speak>${getSsml(data)}</speak>`;
  },
  getEditor: (data: EmphasisData) => {
    return {
      html: `
      <paper-input data-attr="text" always-float-label
        label="Say something" value="${data.text}">
      </paper-input>
      <strong>Emphasis Level</strong>
      <paper-dropdown-menu data-attr="level" value="${data.level}">
        <paper-listbox slot="dropdown-content" class="dropdown-content">
          <paper-item data-value="reduced">Reduced</paper-item>
          <paper-item data-value="none">None</paper-item>
          <paper-item data-value="moderate">Moderate</paper-item>
          <paper-item data-value="strong">Strong</paper-item>
        </paper-listbox>
      </paper-dropdown-menu>
    `,
      onOpen: () => {},
    }
  },
} as SsmlType<EmphasisData>
