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

import App from './modules/main.js';
import './scss/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  new App();
  // Init Firebase
  const firebaseConfig = {
    apiKey: 'AIzaSyCxLwHelYYu6_4FCmxEiwGB3DJHem6-vsk',
    authDomain: 'nightingale-73361.firebaseapp.com',
    projectId: 'nightingale-73361',
    appId: '1:856168060350:web:1ab0fa39c3f6b9e4ddd5ef',
  };
  // Initialize Firebase
  // eslint-disable-next-line
  firebase.initializeApp(firebaseConfig);
});
