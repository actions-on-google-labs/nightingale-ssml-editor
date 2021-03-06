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
 * @fileoverview Logic handler for <break> tag.
 */
import {Data, SsmlType} from './ssml-type'

interface BreakData extends Data {
  time: number
}

const getSsml = (data: BreakData) => {
  return `<break time="${data.time}s" />`;
}

export default {
  getTimelineHtml: () => {
    return `<span class="audio-description">Break</span>`;
  },
  getSsml,
  getOuterSsml: (data: BreakData) => {
    return `<speak>${getSsml(data)}</speak>`;
  },
  getEditor: () => {
    return {
      html: ``,
      onOpen: () => {},
    }
  },
} as SsmlType<BreakData>
