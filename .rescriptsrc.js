const path = require('path')

const logConfig = config => {
  setTimeout(() => { console.log(config) }, 100)
  return config
}

const postcss = config => {
  require('react-app-rewire-postcss')(config, true);
  return config;
}

const alias = config => {
  config.resolve.alias['~'] = path.resolve(__dirname, 'src/')
  return config
}

module.exports = [
  alias,
  postcss,
  //logConfig,
]