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
 * @fileoverview Common interface for SSML type objects
 */

export type SoundLibrary = {sound: string, url: string}[]

/** Raw interface that will be extended by each type */
export interface Data {}

export interface SsmlType<T extends Data> {
  getTimelineHtml: (data: T) => string
  getSsml: (data: T) => string
  getOuterSsml: (data: T) => string
  getEditor: (data: T, soundLibrary: SoundLibrary) => {
    html: string,
    onOpen: (block: any, timeline: any, index: number,
      soundLibrary: SoundLibrary) => void
  }
}
