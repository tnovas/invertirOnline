let credentials = { };

function get() {
  return credentials;
}

function set(newCredentials) {
  credentials = newCredentials;
}

module.exports = {
  get,
  set,
};
