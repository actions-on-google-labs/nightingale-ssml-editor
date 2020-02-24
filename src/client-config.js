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
 * @fileoverview Client-specific configurations. This file should be
 * modified if possible to keep changes central.
 */

/**
 * In order to have proper behavior in the Nightingale client,
 * several exports _must_ be implemented.
 */

/**
 *
 * @param {string} ssml The SSML value to be synthesized
 * @param {object} voice Voice to use for rendering
 * @param {string} voice.languageCode The language code to use
 * @param {string} voice.name The name of the voice to use
 * @return {Promise<string>} Promise with audio synthesis data in byte64
 */
export const synthesize = (ssml, voice) => {
  // eslint-disable-next-line
  const endpoint = firebase.functions().httpsCallable('synthesize');
  const audioConfig = {
    audioConfig: {
      audioEncoding: 'LINEAR16',
      pitch: '0.00',
      speakingRate: '1.00',
    },
    input: {
      /* Wrap in <speak> tag to render correctly */
      ssml: `<speak>${ssml}</speak>`,
    },
    voice: {
      languageCode: voice.languageCode,
      name: voice.name,
    },
  }
  return endpoint({body: audioConfig})
      .then((result) => result.data.audioContent)
}
