const baseConfig = require('./webpack.base');
const path = require('path');

// client config
module.exports = Object.assign({}, {
  entry: {
    'app.bundle': './src/client.tsx',
    'sw': './src/sw.js',
  },
  output: {
    path: path.resolve(__dirname, '../public/'),
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
