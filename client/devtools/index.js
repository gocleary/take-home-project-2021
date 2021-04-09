if (process.env.NODE_ENV === 'development') {
  const consoleColor = require('@yaireo/console-colors') // eslint-disable-line global-require
  const logger = consoleColor()
  window.logger = logger

  logger.white.bgRed.bold.log('colorized logger available, see client/devtools/index for usage')
  logger.white.bgRed.bold.log('https://github.com/yairEO/console-colors')
}
