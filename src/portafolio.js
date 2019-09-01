const { portafolio: url } = require('./utils/urls');
const { get: requestGet } = require('./utils/request');

function get(country) {
  return requestGet(url(country));
}

module.exports = {
  get,
}
