const { instrumentos: url } = require('./utils/urls');
const { get: requestGet } = require('./utils/request');

function get(pais) {
  requestGet(url(pais));
}

module.exports = {
  get,
}
