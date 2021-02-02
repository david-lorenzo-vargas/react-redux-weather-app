const path = require('path');

const webpackTemplate = require('./client/webpack/template');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ NODE_ENV }) => ({
  mode: NODE_ENV,
  entry: './client/app/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentWidth: 2,
                outputStyle: 'expanded',
                includePaths: [
                  path.resolve(__dirname, 'client/app/styles'),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve('./client/app/components'),
      '@routes': path.resolve('./client/app/routes'),
    },
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: webpackTemplate,
    }),
  ]
});
