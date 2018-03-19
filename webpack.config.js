const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'dist')
const APP_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: APP_DIR + '/Tippy2',
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'tippy2.js'
  },
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['babel-plugin-transform-object-rest-spread', 'transform-class-properties']
          }
        }
      },
      {
        test: /\.(css)$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
