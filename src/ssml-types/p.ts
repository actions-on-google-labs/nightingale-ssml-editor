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
 * @fileoverview Logic handler for <p> tag.
 */
import {Data, SsmlType} from './ssml-type'

interface PData extends Data {
  text: string
}

const getSsml = (data: PData) => {
  return `<p>${data.text}</p>`;
}

export default {
  getTimelineHtml: (data: PData) => {
    return `<span class="audio-description">
          <i class="material-icons">mic</i>
            ${data.text}
            </span>`;
  },
  getSsml,
  getOuterSsml: (data: PData) => {
    return `<speak>${getSsml(data)}</speak>`;
  },
  getEditor: (data: PData) => {
    return {
      html: `<paper-input data-attr="text" always-float-label
        label="Say something" value="${data.text}"></paper-input>`,
      onOpen: () => {},
    }
  },
} as SsmlType<PData>
