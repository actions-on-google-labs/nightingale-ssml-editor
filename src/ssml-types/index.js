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
 * @fileoverview Main export for all supported SSML types
 */

import * as audio from './audio'
import * as audioLibrary from './audio-library'
import * as breakTag from './break'
import * as emphasis from './emphasis'
import * as p from './p'
import * as prosody from './prosody'
import * as sayAs from './say-as'
import * as sayAsDate from './say-as-date'
import * as sayAsTime from './say-as-time'
import * as sub from './sub'

export default {
  audio,
  'audio-library': audioLibrary,
  'break': breakTag,
  emphasis,
  p,
  prosody,
  'say-as': sayAs,
  'say-as-date': sayAsDate,
  'say-as-time': sayAsTime,
  sub,
}
