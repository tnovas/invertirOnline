const { token: url } = require('../utils/urls');
const { post: requestPost } = require('../utils/request');
const { set: setCredentials, get: getCredentials } = require('../credentials');

async function connect(username, password) {
  const { data } = await requestPost(url, { username, password, 'grant_type': 'password' }, {'Content-Type': 'application/x-www-form-urlencoded'});
  const credentials = {
    username,
    password,
    ...data,
  }
  setCredentials(credentials);
}

async function reconnect() {
  const { refresh_token, username, password } = getCredentials();
  const { data } = await requestPost(url, { refresh_token, 'grant_type': 'refresh_token' }, {'Content-Type': 'application/x-www-form-urlencoded'});

  const credentials = {
    username,
    password,
    ...data,
  }
  setCredentials(credentials);
}

module.exports = {
  connect,
  reconnect,
};
