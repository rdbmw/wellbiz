const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'postcss'),
  entry: {
    css: './styles.css',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1, sourceMap: true },
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: true },
            }
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
      { test: /\.gif$/, loader: 'url-loader?name=[name].[ext]&outputPath=img/&limit=1&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url-loader?name=[name].[ext]&outputPath=img/&limit=1&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?name=[name].[ext]&outputPath=img/&limit=1&mimetype=image/png' },
      { test: /\.svg$/, loader: 'url-loader?name=[name].[ext]&outputPath=img/&limit=1&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot|otf)/, loader: 'url-loader?name=[name].[ext]&outputPath=font/&limit=1&limit=1' }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].js"
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],

  // …
};
