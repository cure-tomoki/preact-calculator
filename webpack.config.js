const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/client.tsx'),
  output: {
    path: path.resolve(__dirname, './public/'),
    filename: 'app.bundle.js'
  },
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      }
    ],
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: [ '.js', '.ts', '.tsx' ]
  }
};
