const { merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval-source-map',
  optimization: {
    minimize: false,
  },
  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT? process.env.PORT : '3000',
    hot: true,
    open: true,
    liveReload: true,
    historyApiFallback: true,
    allowedHosts: 'all',
    watchFiles: {
      options: {
        usePolling: true,
      },
    },
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 300,
  },
  output: {
    publicPath: '/',
  },
})
