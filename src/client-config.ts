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

import { AvailableVoices } from './';
declare const firebase: any

/**
 * In order to have proper behavior in the Nightingale client,
 * several exports _must_ be implemented.
 */


interface Voice {
  languageCode: string
  name: string
}

/**
 *
 * @param {string} ssml The SSML value to be synthesized
 * @param {Voice} voice Voice to use for rendering
 * @return {Promise<string>} Promise with audio synthesis data in byte64
 */
export const synthesize = async (ssml: string, voice: Voice): Promise<string> => {
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
  const result = await endpoint({body: audioConfig})
  return result.data.audioContent
}

/**
 * An object of the potential voices that can be used in the application.
 * The locales and voices can be picked using the dropdowns in the client.
 * The locale and voice is sent to the `synthesize` endpoint to be converted
 * into audio.
 */
export const voices: AvailableVoices = {
  'en-US': {
    title: 'English (United States)',
    voices: [
      'en-US-Wavenet-A',
      'en-US-Wavenet-B',
      'en-US-Wavenet-C',
      'en-US-Wavenet-D',
      'en-US-Wavenet-E',
      'en-US-Wavenet-F',
      'en-US-Standard-B',
      'en-US-Standard-C',
      'en-US-Standard-D',
      'en-US-Standard-E',
    ],
  },
  'en-GB': {
    title: 'English (Great Britain)',
    voices: [
      'en-GB-Wavenet-A',
      'en-GB-Wavenet-B',
      'en-GB-Wavenet-C',
      'en-GB-Wavenet-D',
      'en-GB-Standard-A',
      'en-GB-Standard-B',
      'en-GB-Standard-C',
      'en-GB-Standard-D',
    ],
  },
  'en-AU': {
    title: 'English (Australia)',
    voices: [
      'en-AU-Wavenet-A',
      'en-AU-Wavenet-B',
      'en-AU-Wavenet-C',
      'en-AU-Wavenet-D',
      'en-AU-Standard-A',
      'en-AU-Standard-B',
      'en-AU-Standard-C',
      'en-AU-Standard-D',
    ],
  },
  'nl-NL': {
    title: 'Dutch (Netherlands)',
    voices: [
      'nl-NL-Wavenet-A',
    ],
  },
  'fr-FR': {
    title: 'French (France)',
    voices: [
      'fr-FR-Wavenet-A',
      'fr-FR-Wavenet-B',
      'fr-FR-Wavenet-C',
      'fr-FR-Wavenet-D',
      'fr-FR-Standard-A',
      'fr-FR-Standard-B',
      'fr-FR-Standard-C',
      'fr-FR-Standard-D',
    ],
  },
  'fr-CA': {
    title: 'French (Canada)',
    voices: [
      'fr-CA-Wavenet-A',
      'fr-CA-Wavenet-B',
      'fr-CA-Wavenet-C',
      'fr-CA-Wavenet-D',
      'fr-CA-Standard-A',
      'fr-CA-Standard-B',
      'fr-CA-Standard-C',
      'fr-CA-Standard-D',
    ],
  },
  'da-DK': {
    title: 'Dansk (Denmark)',
    voices: [
      'da-DK-Wavenet-A',
      'da-DK-Standard-A',
    ],
  },
  'de-DE': {
    title: 'German',
    voices: [
      'de-DE-Wavenet-A',
      'de-DE-Wavenet-B',
      'de-DE-Wavenet-C',
      'de-DE-Wavenet-D',
      'de-DE-Standard-A',
      'de-DE-Standard-B',
    ],
  },
  'it-IT': {
    title: 'Italian',
    voices: [
      'it-IT-Wavenet-A',
      'it-IT-Standard-A',
    ],
  },
  'ja-JP': {
    title: 'Japanese',
    voices: [
      'ja-JP-Wavenet-A',
      'ja-JP-Standard-A',
    ],
  },
  'ko-KR': {
    title: 'Korean',
    voices: [
      'ko-KR-Wavenet-A',
      'ko-KR-Wavenet-B',
      'ko-KR-Wavenet-C',
      'ko-KR-Wavenet-D',
      'ko-KR-Standard-A',
      'ko-KR-Standard-B',
      'ko-KR-Standard-C',
      'ko-KR-Standard-D',
    ],
  },
  'nb-NO': {
    title: 'Norweigan',
    voices: [
      'nb-NO-Wavenet-A',
      'nb-NO-Wavenet-B',
      'nb-NO-Wavenet-C',
      'nb-NO-Wavenet-D',
      'nb-NO-Wavenet-E',
      'nb-NO-Standard-A',
      'nb-NO-Standard-B',
      'nb-NO-Standard-C',
      'nb-NO-Standard-D',
      'nb-NO-Standard-E',
    ],
  },
  'pl-PL': {
    title: 'Polish',
    voices: [
      'pl-PL-Wavenet-A',
      'pl-PL-Wavenet-B',
      'pl-PL-Wavenet-C',
      'pl-PL-Wavenet-D',
      'pl-PL-Wavenet-E',
      'pl-PL-Standard-A',
      'pl-PL-Standard-B',
      'pl-PL-Standard-C',
      'pl-PL-Standard-D',
      'pl-PL-Standard-E',
    ],
  },
  'pt-BR': {
    title: 'Portuguese (Brazil)',
    voices: [
      'pt-BR-Wavenet-A',
      'pt-BR-Standard-A',
    ],
  },
  'pt-PT': {
    title: 'Portuguese (Portugal)',
    voices: [
      'pt-PT-Wavenet-A',
      'pt-PT-Wavenet-B',
      'pt-PT-Wavenet-C',
      'pt-PT-Wavenet-D',
      'pt-PT-Standard-A',
      'pt-PT-Standard-B',
      'pt-PT-Standard-C',
      'pt-PT-Standard-D',
    ],
  },
  'ru-RU': {
    title: 'Russian',
    voices: [
      'ru-RU-Wavenet-A',
      'ru-RU-Wavenet-B',
      'ru-RU-Wavenet-C',
      'ru-RU-Wavenet-D',
      'ru-RU-Standard-A',
      'ru-RU-Standard-B',
      'ru-RU-Standard-C',
      'ru-RU-Standard-D',
    ],
  },
  'es-ES': {
    title: 'Spanish',
    voices: [
      'es-ES-Standard-A',
    ],
  },
  'sk-SK': {
    title: 'Slovak',
    voices: [
      'sk-SK-Wavenet-A',
      'sk-SK-Standard-A',
    ],
  },
  'sv-SE': {
    title: 'Swedish',
    voices: [
      'sv-SE-Wavenet-A',
      'sv-SE-Standard-A',
    ],
  },
  'tr-TR': {
    title: 'Turkish',
    voices: [
      'tr-TR-Wavenet-A',
      'tr-TR-Wavenet-B',
      'tr-TR-Wavenet-C',
      'tr-TR-Wavenet-D',
      'tr-TR-Wavenet-E',
      'tr-TR-Standard-A',
      'tr-TR-Standard-B',
      'tr-TR-Standard-C',
      'tr-TR-Standard-D',
      'tr-TR-Standard-E',
    ],
  },
  'uk-UA': {
    title: 'Ukranian',
    voices: [
      'uk-UA-Wavenet-A',
      'uk-UA-Standard-A',
    ],
  },
}
