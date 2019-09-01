const { paneles: url } = require('./utils/urls');
const { get: requestGet } = require('./utils/request');

function get(pais, instrumento) {
  return requestGet(url(pais, instrumento));
}

module.exports = {
  get,
}
