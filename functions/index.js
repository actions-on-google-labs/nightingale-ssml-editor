/**
Copyright 2019 Google Inc. All rights reserved.

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
const functions = require('firebase-functions');
const textToSpeech = require('@google-cloud/text-to-speech');

exports.synthesize = functions.https.onCall(async (data, _) => {
  const {body} = data;
  // Use Application Default Credentials in Firebase runtime
  const client = new textToSpeech.TextToSpeechClient();
  try {
    const [synthRes] = await client.synthesizeSpeech(body);
    const data = synthRes.audioContent;
    const buffer = new Buffer(data);
    const base64data = buffer.toString('base64');
    return {
      audioContent: base64data,
    };
  } catch (e) {
    throw new functions.https.HttpsError('internal', e);
  }
});
