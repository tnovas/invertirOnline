const { get: getCredentials } = require('./src/credentials');
const { connect, reconnect } = require('./src/token');
const portafolio = require('./src/portafolio');
const cuenta = require('./src/cuenta');
const instrumentos = require('./src/instrumentos');
const paneles = require('./src/paneles');
const cotizaciones = require('./src/cotizaciones');

/**
 * Object param ->
 *    @param {string} user
 *    @param {string} password
 */
class InvertirOnline {
  constructor(user, password) {
    connect(user, password);

    this.portafolio = portafolio;
    this.cuenta = cuenta;
    this.instrumentos = instrumentos;
    this.paneles = paneles;
    this.cotizaciones = cotizaciones;
  }

  credentials() {
    return getCredentials();
  }

  reconnect() {
    reconnect();
  }
}

module.exports = InvertirOnline; 
