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

import {Data, SsmlType} from './ssml-type'

interface AudioData extends Data {
  src: string
  alt: string
  clipBegin?: number
  clipEnd?: number
}

const getSsml = (data: AudioData) => {
  return `<audio src="${data.src}" ` +
    (data.clipBegin ? `clipBegin="${data.clipBegin}s"` : '') +
    (data.clipEnd ? `clipEnd="${data.clipEnd}s"` : '') +
    `>${data.alt}</audio>`;
}

export default {
  getTimelineHtml: (data: AudioData) => {
    return `<strong class="audio-description">
            <i class="material-icons">music_video</i>
            ${data.alt}
            </strong>`;
  },
  getSsml,
  getOuterSsml: (data: AudioData) => {
    return getSsml(data);
  },
  getEditor: (data: AudioData) => {
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
} as SsmlType<AudioData>
