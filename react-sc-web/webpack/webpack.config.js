const fs = require('fs');
const { resolve } = require('path');

const reactScWebRoot = resolve(__dirname, '..');
const envPath = resolve(reactScWebRoot, '.env');
// Явный путь: npm/yarn могут запускать webpack не из каталога react-sc-web.
// override: true — значения из .env перекрывают export API_URL=... в shell (иначе снова CORS на :8000).
require('dotenv').config({
  path: envPath,
  override: true,
});

const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const tsconfigPath = resolve(reactScWebRoot, 'tsconfig.json');

/** Подстановка process.env.* в бандл (вместо dotenv-webpack). */
function buildProcessEnvDefine() {
  let parsed = {};
  try {
    parsed = dotenv.parse(fs.readFileSync(envPath));
  } catch {
    // нет .env
  }
  const keys = new Set([...Object.keys(parsed), 'API_URL', 'SC_URL']);
  const defs = {};
  for (const key of keys) {
    const val =
      key === 'API_URL'
        ? String(process.env.API_URL ?? '').trim()
        : (process.env[key] ?? '');
    defs[`process.env.${key}`] = JSON.stringify(val);
  }
  return defs;
}

module.exports = {
  // Явный корень проекта: entry и typecheck не зависят от cwd при запуске webpack.
  context: reactScWebRoot,
  entry: {
    app: './src/index.tsx',
  },
  plugins: [
    new webpack.DefinePlugin(buildProcessEnvDefine()),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: tsconfigPath,
      },
    }),
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
        loader: 'ts-loader',
        exclude: [/node_modules/, /\.d\.ts$/],
        options: {
          transpileOnly: true,
          compilerOptions: {
            skipLibCheck: true,
          },
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
    plugins: [
      new TsconfigPathsPlugin({
        configFile: tsconfigPath,
        baseUrl: reactScWebRoot,
      }),
    ],
    alias: {
      'ostis-ui-lib$': resolve(__dirname, '../src/vendor/ostis-ui-lib/ostis-ui-lib.js'),
      // Subpath imports like @constants/features (tsconfig paths) are not always applied by
      // tsconfig-paths-webpack-plugin when webpack.config.js lives under webpack/.
      '@constants': resolve(reactScWebRoot, 'src/constants'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
    },
  },
};
