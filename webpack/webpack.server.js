const baseConfig = require('./webpack.base');
const path = require('path');

// client config
module.exports = Object.assign({}, {
  entry: './src/server.ts',
  output: {
    path: path.resolve(__dirname, '../build/'),
    filename: 'server.js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
}, baseConfig);
