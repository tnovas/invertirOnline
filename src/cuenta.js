const { estadoCuenta: url } = require('./utils/urls');
const { get: requestGet } = require('./utils/request');

function estado() {
  return requestGet(url);
}

module.exports = {
  estado,
}
