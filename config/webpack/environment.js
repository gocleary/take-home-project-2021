const { environment } = require('@rails/webpacker')

environment.config.merge({ resolve: { alias: { 'react-dom': '@hot-loader/react-dom' } } })
// Fixes: React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.
// https://github.com/gaearon/react-hot-loader/issues/1227#issuecomment-482139583

module.exports = environment
