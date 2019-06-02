const baseConfig = require('./webpack.base');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

// client config
module.exports = Object.assign({}, {
  entry: './src/client.tsx',
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: 'app.bundle.js',
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
  plugins: [
    new CopyPlugin([
      {
        from: path.resolve(__dirname, '../src/static/*'),
        to: path.resolve(__dirname, '../dist/'),
        flatten: true
      },
    ]),
  ],
}, baseConfig);
