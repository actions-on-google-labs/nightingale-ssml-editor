# Nightingale
**NOTE**

This is an experimental project and will receive minimal maintenance. Only bugs for security issues will be accepted. No feature requests will be accepted. Pull requests will be acknowledged and reviewed as soon as possible. There is no associated SLAs.

Some of the projects in this experimental org might mature to a more stable state and move into the main [Actions on Google GitHub org](https://github.com/actions-on-google).

---
A graphical tool to generate and simulate the [Speech Synthesis Markup Language (SSML)](https://developers.google.com/assistant/actions/reference/ssml)
using a familiar non-linear editor interface. In voice applications, SSML can be used to create
more immersive audio experiences.

[Try it out!](https://actions-on-google-labs.github.io/nightingale-ssml-editor)

## Key features
* Drag and drop blocks onto multiple tracks
* Snap blocks to each other on one or more tracks
* Preview speech synthesis using Google Cloud TTS voices
* Edit parameters for each SSML block
* Edit parameters for each track independently
* Move blocks around without requiring speech to be synthesized again
* Download full audio output
* Generate full SSML output

## Building from source
The project is designed as a [Polymer 3](https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview)-based web application.

### Setup
1. Install Dependencies`npm install` or `yarn`
2. Install Firebase Tools `sudo npm install -g firebase-tools`

### Development
1. From the root directory `npm start`
2. This will run webpack and launch [http://localhost:8080/](http://localhost:8080/)
3. Sass and JS changes are live reloaded
4. Run `npm run build` or `yarn build` to recompile the Typescript changes.

### Testing
1. Execute `npm run lint` to run lint
2. Execute `npm run test` to run both lint and unit tests

### Production
1. From the root directory `npm run build`

### Deployment
#### Deploying client-side code
The project is hosted on GitHub pages, so commit after running the build and then the web app
should be regenerated once on the `master` branch.

For those not committing back to the main project, an alternate static hosting site like
[Firebase](https://firebase.google.com) may be used.

#### Deploying Cloud Functions
To provide speech synthesis, this project uses Cloud Functions for Firebase to interact with
the [Google Cloud Text-to-Speech API](https://cloud.google.com/text-to-speech/).

If this deployment is not happening to the original project:
1. [Enable the Google Cloud TTS API](https://console.cloud.google.com/apis/library/texttospeech.googleapis.com) for your project
1. Be sure to update the Firebase client values in `src/index.js`

To deploy, from the root directory `npm run deploy`

## Make Contributions

Please read and follow the steps in the [CONTRIBUTING.md](CONTRIBUTING.md).

## License

See [LICENSE](LICENSE).

## Terms

Your use of this sample is subject to, and by using or downloading the sample files you agree to comply with, the [Google APIs Terms of Service](https://developers.google.com/terms/).
