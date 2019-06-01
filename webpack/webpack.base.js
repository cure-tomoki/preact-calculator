const path = require('path');

// webpack base config
module.exports = {
  context: path.join(__dirname, '../'),
  mode: process.env.NODE_ENV || 'development',
  devtool: 'inline-source-map',
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: [ '.js', '.ts', '.tsx' ]
  },
};