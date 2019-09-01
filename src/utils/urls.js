const apiVersion = 'api/v2/';

const base = 'https://api.invertironline.com/';
const token = 'token';
const portafolio = (pais) => `${apiVersion}portafolio/${pais}`;
const estadoCuenta = 'estadocuenta';
const instrumentos = (pais) => `${apiVersion}${pais}/titulos/cotizacion/instrumentos`;
const paneles = (pais, instrumento) => `${apiVersion}${pais}/titulos/cotizacion/paneles/${instrumento}`;
const cotizaciones = (instrumento, panel, pais) => `${apiVersion}cotizaciones/${instrumento}/${panel}/${pais}`;

module.exports = {
  base,
  token,
  portafolio,
  estadoCuenta,
  instrumentos,
  paneles,
  cotizaciones,
};
