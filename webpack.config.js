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
const webpack = require('webpack'); // To access built-in plugins
const path = require('path');

module.exports = (env) => {
  console.log(env);

  const watch = env === 'development' ? true : false;

  return {
    watch,
    devServer: {
      // eslint-disable-next-line
      contentBase: path.join(__dirname, 'public'),
      compress: false,
      port: 8080,
    },
    entry: './dist/index.js',
    output: {
      filename: 'app.js',
      // eslint-disable-next-line
      path: path.resolve(__dirname, 'public'),
      libraryTarget: 'var',
      library: 'Nightingale',
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          'style-loader', // Creates style nodes from JS strings
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS, using Node Sass by default
        ],
      }],
    },
  };
};
