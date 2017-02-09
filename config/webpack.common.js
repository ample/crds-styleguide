var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var Dotenv = require('dotenv-webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': ['./src/polyfills.ts'],
    'app': ['./src/main.ts']
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file"
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'polyfills']
    }),

    new Dotenv({
      systemvars: true
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets',
      },
      {
        from: 'src/examples',
        to: 'examples',
      },
      {
        from: './apache_site.conf',
        to: 'apache_site.conf'
      }
    ], { ignore: ['mock-data/*'] })
  ]
};