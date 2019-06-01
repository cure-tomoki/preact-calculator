const baseConfig = require('./webpack.base');
const path = require('path');

// client config
module.exports = Object.assign({}, {
  entry: './src/client.tsx',
  output: {
    path: path.resolve(__dirname, '../public/'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              localIdentName: '[local]--[hash:base64:5]',
            }
          }
        ]
      },
    ],
  },
}, baseConfig);
