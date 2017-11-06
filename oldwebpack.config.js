const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const extractCSS = new ExtractTextPlugin({
  filename: 'css/[name].css',
  // disable: true,
  // allChunks: true,
});
// const extractHTML = new ExtractTextPlugin({ filename: '[name].html', ignoreOrder: false, allChunks: true});
const extractHTML = new ExtractTextPlugin({
  filename:  (getPath) => {
      return getPath('[name].html').replace('_', '-');
    },
});

module.exports = {
  // context: path.resolve(__dirname, 'postcss'),
  entry: {
    styles: './postcss/styles.css',
    index: './html/index/index.js',
    registratsiya_ooo: './html/registratsiya-ooo/index.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
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
        test: /\.html$/,
        use: extractHTML.extract({
          use: [
            {
              loader: 'html-loader',
              options: { attrs : false, minimize: false},
            }
          ],
        }),
      },
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
      { test: /\.gif$/, loader: 'url-loader?name=[name].[ext]&outputPath=img/&useRelativePath=true&emitFile=false&limit=1&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url-loader?name=[name].[ext]&outputPath=img/&useRelativePath=true&emitFile=false&limit=1&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?name=[name].[ext]&outputPath=img/&useRelativePath=true&emitFile=false&limit=1&mimetype=image/png' },
      { test: /\.svg$/, loader: 'url-loader?name=[name].[ext]&outputPath=img/&useRelativePath=true&emitFile=false&limit=1&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot|otf)/, loader: 'url-loader?name=[name].[ext]&outputPath=font/&useRelativePath=true&emitFile=false&limit=1' }
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "[name].js"
  },
  plugins: [
    extractCSS,
    extractHTML,
    // new webpack.HotModuleReplacementPlugin(),
  ],
  // devServer: {
  //    hot: true
  //  },
};
