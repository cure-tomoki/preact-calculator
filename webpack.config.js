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
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src/components'),
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          }
        ]
      },
    ],
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: [ '.js', '.ts', '.tsx' ]
  }
};
