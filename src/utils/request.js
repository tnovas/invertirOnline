const axios = require('axios');
const { get: getCredentials } = require('../credentials');
const { base } = require('./urls');

const axiosInstance = axios.create({
  baseURL: base,
});

function get(url, params = {}) {
  return axiosInstance({
    method: 'GET',
    url,
    params: {
      ...params,
      access_token: getCredentials().accessToken,
    },
  });
}

function post(url, data = {}, headers = {}) {
  return axiosInstance({
    method: 'POST',
    url,
    headers,
    data: {
      ...data,
      access_token: getCredentials().accessToken,
    },
  });
}

module.exports = {
  get,
  post,
};
