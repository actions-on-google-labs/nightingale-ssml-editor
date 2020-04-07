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
 * @fileoverview Logic handler for <say-as interpret-as="date"> tag.
 */
import {Data, SsmlType} from './ssml-type'

interface DateData extends Data {
  format: string
  detail: 1 | 2
  text: string
}

const getSsml = (data: DateData) => {
  return `<say-as interpret-as="date" ` +
    `format="${data.format}" ` +
    `detail="${data.detail}">` +
    `${data.text}</say-as>`;
}

export default {
  getTimelineHtml: (data: DateData) => {
    return `<span class="audio-description">
            <img src="./images/date.png"/>
            ${data.text}
            </span>`;
  },
  getSsml,
  getOuterSsml: (data: DateData) => {
    return `<speak>${getSsml(data)}</speak>`;
  },
  getEditor: (data: DateData) => {
    return {
      html: `
        <paper-input data-attr="text" always-float-label
          label="Date" value="${data.text}">
        </paper-input>
        <paper-input data-attr="format" always-float-label
          label="Date format" value="${data.format}">
        </paper-input>
        <strong>Say As</strong>
        <paper-dropdown-menu data-attr="detail" value="${data.detail}">
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="1">
              The {ordinal day} of {month}, {year}
            </paper-item>
            <paper-item data-value="2">
              {Month} {day}, {year}
            </paper-item>
          </paper-listbox>
        </paper-dropdown-menu>

        <p>Supported format characters are y, m, d for year, month, and day
          (of the month) respectively
        </p>
      `,
      onOpen: () => {},
    }
  },
} as SsmlType<DateData>
