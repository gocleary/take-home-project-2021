process.env.NODE_ENV = process.env.NODE_ENV || 'development'
const environment = require('./environment')

// don't transpile node_modules
environment.loaders.delete('nodeModules')

// allows for editing sass/scss files directly in browser
if (!module.hot) {
  environment.loaders.get('sass').use.find(item => item.loader === 'sass-loader').options.sourceMapContents = false
}

module.exports = environment.toWebpackConfig()
