const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
// const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const DEV = process.env.NODE_ENV == 'development';
function generateHTML(tmp) {
  return new HtmlWebpackPlugin({
    // alwaysWriteToDisk: true,
    // outputPath: path.resolve(__dirname, 'public'),
    filename: tmp + '.html',
    template: './html/' + tmp + '.html',
    excludeAssets: DEV ? [] : [/index.js/]
  })
}

const extractCSS = new ExtractTextPlugin({
  filename: 'css/[name].css?t=' + Date.now(),
  disable: DEV,
  allChunks: true,
});

module.exports = {
  // context: path.resolve(__dirname, 'postcss'),
  entry: {
    index: './index.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
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
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: 'html-loader',
      //       options: { attrs : false, minimize: false},
      //     }
      //   ],
      // },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //       },
      //     },
      //     {
      //       loader: "extract-loader",
      //     },
      //     {
      //       loader: "html-loader",
      //       options: {
      //         attrs: false,
      //         interpolate: true,
      //         minimize: false
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['env'] }
        }]
      },
      { test: /\.gif$/, loader: 'url-loader?name=[name].[ext]&publicPath=../img/&emitFile=false&limit=1&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url-loader?name=[name].[ext]&publicPath=../img/&emitFile=false&limit=1&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?name=[name].[ext]&publicPath=../img/&emitFile=false&limit=1&mimetype=image/png' },
      { test: /\.svg$/, loader: 'url-loader?name=[name].[ext]&publicPath=../img/&emitFile=false&limit=1&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot|otf)/, loader: 'url-loader?name=[name].[ext]&publicPath=../font/&emitFile=false&limit=1' }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].js"
  },
  plugins: [
    extractCSS,
    generateHTML('index'),
    generateHTML('registratsiya-ooo'),
    new HtmlWebpackExcludeAssetsPlugin()
    // new HtmlWebpackHarddiskPlugin()
  ],
  devServer: {
     hot: true
   },
};
