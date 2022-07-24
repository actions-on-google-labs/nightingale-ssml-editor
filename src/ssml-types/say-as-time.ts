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
 * @fileoverview Logic handler for <say-as interpret-as="time"> tag.
 */
import {Data, SsmlType} from './ssml-type'

interface TimeData extends Data {
  format: string
  detail: 1 | 2
  text: string
}

const getSsml = (data: TimeData) => {
  return `<say-as interpret-as="time" format="${data.format}" ` +
    `detail="${data.detail}">${data.text}</say-as>`;
}

export default {
  getTimelineHtml: (data: TimeData) => {
    return `<span class="audio-description">
            <i class="material-icons">schedule</i>
            ${data.text}
            </span>`;
  },
  getSsml,
  getOuterSsml: (data: TimeData) => {
    return `<speak>${getSsml(data)}</speak>`;
  },
  getEditor: (data: TimeData) => {
    return {
      html: `
        <paper-input data-attr="text" always-float-label
          label="Time" value="${data.text}">
        </paper-input>
        <paper-input data-attr="format" always-float-label
          label="Time format" value="${data.format}">
        </paper-input>
        <strong>Say As</strong>
        <paper-dropdown-menu data-attr="detail" value="${data.detail}">
          <paper-listbox slot="dropdown-content" class="dropdown-content">
            <paper-item data-value="1">24-Hour Time</paper-item>
            <paper-item data-value="2">12-Hour Time</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>

        <p>Supported format characters are h, m, s, Z, 12, 24 for hour,
          minute, second, time zone, 12-hr, and 24-hr time respectively
        </p>
      `,
      onOpen: () => {},
    }
  },
} as SsmlType<TimeData>
