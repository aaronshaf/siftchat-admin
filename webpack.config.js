const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      './client/index.js'
    ]
  },
  output: {
    path: 'dist',
    filename: 'index-[hash].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /node_modules[\\\/]auth0-lock[\\\/].*\.js$/,
        loaders: [
          'transform-loader/cacheable?brfs',
          'transform-loader/cacheable?packageify'
        ]
      },
      {
        test: /node_modules[\\\/]auth0-lock[\\\/].*\.ejs$/,
        loader: 'transform-loader/cacheable?ejsify'
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          'presets': [
            'es2015',
            'react',
            'stage-0'
          ],
          'plugins': [
            'syntax-async-functions',
            'syntax-class-properties',
            'syntax-object-rest-spread',
            'syntax-jsx',
            'syntax-flow',
            'transform-async-to-generator',
            'transform-class-properties',
            'transform-flow-strip-types',
            'transform-react-jsx',
            'transform-object-rest-spread',
            'transform-regenerator'
          ]
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './client/templates/index.html',
    inject: true
  }), new webpack.DefinePlugin({
    'process.env.API_HOST': JSON.stringify(process.env.API_HOST)
  })]
}
