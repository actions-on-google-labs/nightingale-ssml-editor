/**
 * Copyright 2021 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import test from 'ava'
import {importSsml} from '../ssml-import'

test('Import simple Hello World', async (t) => {
  const timeline = await importSsml(`
    <speak><seq>
      <media xml:id="track-0" begin="0s" soundLevel="+0dB">
        <speak><p>hello world</p></speak>
      </media>
    </seq></speak>
  `)
  t.deepEqual({
    timeline: [{
      type: 'p',
      data: {
        text: 'hello world',
      },
      id: 0,
      track: 0,
      time: 0,
      audioUpdated: 0,
    }],
    metadata: [{
      fadeInDur: 0,
      fadeOutDur: 0,
      soundLevel: 0,
    }],
    id: 1,
  }, timeline)
})

test('Import emphasis Hello World', async (t) => {
  const timeline = await importSsml(`
    <speak><seq>
      <media xml:id="track-0" begin="0s" soundLevel="+0dB">
        <speak><emphasis level="strong">hello world</emphasis></speak>
      </media>
    </seq></speak>
  `)
  t.deepEqual({
    timeline: [{
      type: 'emphasis',
      data: {
        text: 'hello world',
        level: 'strong',
      },
      id: 0,
      track: 0,
      time: 0,
      audioUpdated: 0,
    }],
    metadata: [{
      fadeInDur: 0,
      fadeOutDur: 0,
      soundLevel: 0,
    }],
    id: 1,
  }, timeline)
})

test('Import speech alias Hello World', async (t) => {
  const timeline = await importSsml(`
    <speak><seq>
      <media xml:id="track-0" begin="0s" soundLevel="+0dB">
        <speak><sub alias="Hello World">HW</sub></speak>
      </media>
    </seq></speak>
  `)
  t.deepEqual({
    timeline: [{
      type: 'sub',
      data: {
        text: 'HW',
        alias: 'Hello World',
      },
      id: 0,
      track: 0,
      time: 0,
      audioUpdated: 0,
    }],
    metadata: [{
      fadeInDur: 0,
      fadeOutDur: 0,
      soundLevel: 0,
    }],
    id: 1,
  }, timeline)
})

test('Import say-as Hello World', async (t) => {
  const timeline = await importSsml(`
    <speak><seq>
      <media xml:id="track-0" begin="0s" soundLevel="+0dB">
        <speak><say-as interpret-as="ordinal">1</say-as></speak>
      </media>
    </seq></speak>
  `)
  t.deepEqual({
    timeline: [{
      type: 'say-as',
      data: {
        'text': '1',
        'interpret-as': 'ordinal',
      },
      id: 0,
      track: 0,
      time: 0,
      audioUpdated: 0,
    }],
    metadata: [{
      fadeInDur: 0,
      fadeOutDur: 0,
      soundLevel: 0,
    }],
    id: 1,
  }, timeline)
})

test('Import two consecutive Hello Worlds', async (t) => {
  const timeline = await importSsml(`
    <speak><seq>
      <media xml:id="track-0" begin="0s" soundLevel="+0dB">
        <seq>
          <media>
            <speak><p>hello world</p></speak>
          </media>
          <media>
            <speak><p>hello world</p></speak>
          </media>
        </seq>
      </media>
    </seq></speak>
  `)
  t.deepEqual({
    timeline: [{
      type: 'p',
      data: {
        text: 'hello world',
      },
      id: 0,
      track: 0,
      time: 0,
      audioUpdated: 0,
    }, {
      type: 'p',
      data: {
        text: 'hello world',
      },
      id: 1,
      track: 0,
      time: 0,
      audioUpdated: 0,
    }],
    metadata: [{
      fadeInDur: 0,
      fadeOutDur: 0,
      soundLevel: 0,
    }],
    id: 2,
  }, timeline)
})

test('Import two non-consecutive Hello Worlds', async (t) => {
  const timeline = await importSsml(`
    <speak><seq>
      <media xml:id="track-0" begin="0s" soundLevel="+0dB">
        <seq>
          <media>
            <speak><p>hello world</p></speak>
          </media>
          <media begin="0.35s">
            <speak><p>hello world</p></speak>
          </media>
        </seq>
      </media>
    </seq></speak>
  `)
  t.deepEqual({
    timeline: [{
      type: 'p',
      data: {
        text: 'hello world',
      },
      id: 0,
      track: 0,
      time: 0,
      audioUpdated: 0,
    }, {
      type: 'p',
      data: {
        text: 'hello world',
      },
      id: 1,
      track: 0,
      time: 0.35,
      audioUpdated: 0,
    }],
    metadata: [{
      fadeInDur: 0,
      fadeOutDur: 0,
      soundLevel: 0,
    }],
    id: 2,
  }, timeline)
})

test('Import Hello World not at start', async (t) => {
  const timeline = await importSsml(`
    <speak><seq>
      <media xml:id="track-0" begin="0.87s" soundLevel="+0dB">
        <speak><p>hello world</p></speak>
      </media>
    </seq></speak>
  `)
  t.deepEqual({
    timeline: [{
      type: 'p',
      time: 0.87,
      data: {
        text: 'hello world',
      },
      id: 0,
      track: 0,
      audioUpdated: 0,
    }],
    metadata: [{
      fadeInDur: 0,
      fadeOutDur: 0,
      soundLevel: 0,
    }],
    id: 1,
  }, timeline)
})

test('Import two parallel Hello Worlds', async (t) => {
  const timeline = await importSsml(`
    <speak><par>
      <media xml:id="track-0" begin="0s" soundLevel="+0dB">
        <speak><p>hello world</p></speak>
      </media>
      <media xml:id="track-1" begin="0s" soundLevel="+0dB">
        <speak><p>hello world</p></speak>
      </media>
    </par></speak>
  `)
  t.deepEqual({
    timeline: [{
      type: 'p',
      data: {
        text: 'hello world',
      },
      id: 0,
      track: 0,
      time: 0,
      audioUpdated: 0,
    }, {
      type: 'p',
      data: {
        text: 'hello world',
      },
      id: 1,
      track: 1,
      time: 0,
      audioUpdated: 0,
    }],
    metadata: [{
      fadeInDur: 0,
      fadeOutDur: 0,
      soundLevel: 0,
    }, {
      fadeInDur: 0,
      fadeOutDur: 0,
      soundLevel: 0,
    }],
    id: 2,
  }, timeline)
})

test('Import two parallel Hello Worlds with track effects', async (t) => {
  const timeline = await importSsml(`
    <speak><par>
      <media xml:id="track-0" begin="0s" soundLevel="+1dB" fadeInDur="0.8s" fadeOutDur="1s">
        <speak><p>hello world</p></speak>
      </media>
      <media xml:id="track-1" begin="0s" soundLevel="-3.5dB" fadeInDur="1.4s" fadeOutDur="1.4s">
        <speak><p>hello world</p></speak>
      </media>
    </par></speak>
  `)
  t.deepEqual({
    timeline: [{
      type: 'p',
      data: {
        text: 'hello world',
      },
      id: 0,
      track: 0,
      time: 0,
      audioUpdated: 0,
    }, {
      type: 'p',
      data: {
        text: 'hello world',
      },
      id: 1,
      track: 1,
      time: 0,
      audioUpdated: 0,
    }],
    metadata: [{
      fadeInDur: 0.8,
      fadeOutDur: 1,
      soundLevel: 1,
    }, {
      fadeInDur: 1.4,
      fadeOutDur: 1.4,
      soundLevel: -3.5,
    }],
    id: 2,
  }, timeline)
})
