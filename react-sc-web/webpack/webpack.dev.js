const { merge } = require('webpack-merge')
const config = require('./webpack.config')

/**
 * GET страницы /login в браузере (Accept: text/html) → SPA index.html.
 * XHR/fetch (Accept: application/json и т.д.) → прокси на sc-web :8000.
 */
function bypassLoginLogout(req) {
  const urlPath = (req.url || '').split('?')[0]
  if (urlPath !== '/login' && urlPath !== '/logout') {
    return
  }
  const accept = req.headers.accept || ''
  const first = accept.split(',')[0].trim().toLowerCase()
  const looksLikeBrowserDocNav =
    req.method === 'GET' &&
    (first.startsWith('text/html') || first.startsWith('application/xhtml+xml'))
  if (looksLikeBrowserDocNav) {
    return '/index.html'
  }
}

// По умолчанию без polling (быстрее на обычном диске). В Docker/WSL, если HMR не видит файлы:
//   WEBPACK_POLL=1 npm start
const usePolling =
  process.env.WEBPACK_POLL === '1' || process.env.WEBPACK_POLL === 'true'

// По умолчанию быстрее пересборка; полные карты для глубокой отладки столбцов:
//   WEBPACK_DEVTOOL=eval-source-map npm start
const devtool = process.env.WEBPACK_DEVTOOL || 'eval-cheap-module-source-map'

const devServer = {
  host: '0.0.0.0',
  port: process.env.PORT ? process.env.PORT : '3000',
  hot: true,
  open: true,
  // Меньше гонок с HMR (?hot-update*.js загружаются из памяти dev-server).
  liveReload: false,
  historyApiFallback: true,
  allowedHosts: 'all',
  devMiddleware: {
    publicPath: '/',
  },
  // localhost иногда резолвится в ::1, а sc-web слушает только IPv4 — используем 127.0.0.1.
  proxy: [
    {
      // /scg отдаёт HTML с тегами <script src="/static/..."> — без прокси /static
      // webpack-dev-server отдаёт index.html (SPA fallback), и в iframe оказывается весь React.
      context: (pathname) =>
        pathname.startsWith('/api') ||
        pathname.startsWith('/login') ||
        pathname.startsWith('/logout') ||
        pathname.startsWith('/scg') ||
        pathname.startsWith('/static'),
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
      secure: false,
      bypass: bypassLoginLogout,
    },
  ],
  client: {
    // При host 0.0.0.0 без auto WS/HMR может стучаться не на ту машину или путь.
    webSocketURL: 'auto://0.0.0.0:0/ws',
    overlay: {
      errors: true,
      warnings: false,
    },
  },
}

if (usePolling) {
  devServer.watchFiles = {
    options: {
      usePolling: true,
    },
  }
}

module.exports = merge(config, {
  mode: 'development',
  devtool,
  optimization: {
    minimize: false,
  },
  devServer,
  watchOptions: usePolling
    ? {
        poll: 1000,
        aggregateTimeout: 300,
      }
    : {
        aggregateTimeout: 300,
      },
  output: {
    publicPath: '/',
  },
})
