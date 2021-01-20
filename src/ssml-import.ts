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

// Library does not have type definitions
// eslint-disable-next-line @typescript-eslint/no-var-requires
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

export interface TimelineBlock {
  type: string
  begin?: number
  time: number
  duration?: number
  track: number
  id: number
  audio?: string
  audioUpdated: number
  data: {[key: string]: string | undefined}
}

export interface TimelineMetadata {
  soundLevel: number
  fadeInDur: number
  fadeOutDur: number
}

interface ImportedSsml {
  timeline: TimelineBlock[]
  metadata: TimelineMetadata[]
  id: number
}

const dataKeys = ['rate', 'pitch', 'clipBegin', 'clipEnd', 'alias', 'interpret-as', 'format', 'detail', 'level', 'alphabet', 'ph']

function processNodes(timeline: ImportedSsml, track: number, node: any[], metadata: any) {
  node.forEach((speech: any) => {
    if (speech.media) {
      processNodes(timeline, track, speech.media, speech.$)
      return
    }
    if (speech.speak) {
      processNodes(timeline, track, speech.speak, metadata || speech.$)
      return
    }
    const entries = Object.entries(speech)[0]
    const entry = (entries[1] as any)[0]
    const block: TimelineBlock = {
      type: entries[0],
      data: {
        text: (typeof entry === 'string') ? entry : entry['_'],
      },
      id: timeline.id++,
      track,
      time: 0,
      audioUpdated: 0,
    }
    if (metadata?.begin) {
      block.time = parseFloat(metadata.begin)
    }
    dataKeys.forEach((key) => {
      if (entry['$'] && entry['$'][key]) {
        block.data[key] = entry['$'][key]
      }
    })
    timeline.timeline.push(block)
  })
}

export async function importSsml(ssml: string, debug?: boolean): Promise<ImportedSsml> {
  const json = await parser.parseStringPromise(ssml)
  if (debug) {
    console.log(JSON.stringify(json))
  }
  const timeline: ImportedSsml = {
    timeline: [],
    metadata: [],
    id: 0,
  }
  const speech = json.speak
  if (speech.seq) {
    // A single track
    speech.seq.forEach((ssmlSeq: any) => {
      if (ssmlSeq.media) {
        let mediaMetadata: any
        ssmlSeq.media.forEach((obj: any) => {
          let trackId = 0
          if (obj.$) {
            trackId = parseInt(obj.$['xml:id'].substr(6))
            if (!timeline.metadata[trackId]) {
              timeline.metadata[trackId] = {
                fadeInDur: 0,
                fadeOutDur: 0,
                soundLevel: 0,
              }
            }
            timeline.metadata[trackId].soundLevel = parseFloat(obj.$.soundLevel)
            mediaMetadata = obj.$
          }
          processNodes(timeline, trackId, obj.speak || obj.seq, mediaMetadata)
        })
      }
    })
  }
  if (speech.par) {
    // A single track
    speech.par.forEach((ssmlPar: any) => {
      if (ssmlPar.media) {
        ssmlPar.media.forEach((obj: any) => {
          let trackId = 0
          if (obj.$) {
            trackId = parseInt(obj.$['xml:id'].substr(6))
            if (!timeline.metadata[trackId]) {
              timeline.metadata[trackId] = {
                fadeInDur: 0,
                fadeOutDur: 0,
                soundLevel: 0,
              }
            }
            timeline.metadata[trackId].soundLevel = parseFloat(obj.$.soundLevel)
            timeline.metadata[trackId].fadeInDur = parseFloat(obj.$.fadeInDur) || 0
            timeline.metadata[trackId].fadeOutDur = parseFloat(obj.$.fadeOutDur) || 0
          }
          processNodes(timeline, trackId, obj.speak || obj.seq, {})
        })
      }
    })
  }
  return timeline
}
