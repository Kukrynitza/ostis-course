const { resolve } = require('path');
require('dotenv').config();
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin(),
    new ESLintPlugin({
      emitError: true,
      emitWarning: true,
      failOnError: false,
      extensions: ['.ts', '.tsx', '.js'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        exclude: [/node_modules/, /\.d\.ts$/],
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        // include: resolve(__dirname, 'src/assets'),
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  resolve: {
    symlinks: false,
    extensions: ['.ts', '.tsx', '.js', '.css'],
    plugins: [new TsconfigPathsPlugin()],
    alias: {
      'ostis-ui-lib$': resolve(__dirname, '../src/vendor/ostis-ui-lib/ostis-ui-lib.js'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
    },
  },
};
