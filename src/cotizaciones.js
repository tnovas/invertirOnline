const { cotizaciones: url } = require('./utils/urls');
const { get: requestGet } = require('./utils/request');

function get(instrumento, panel, pais) {
  return requestGet(url(instrumento, panel, pais));
}

module.exports = {
  get,
}
