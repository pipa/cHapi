// Deps =========================================
const confidence = require('confidence');
const path = require('path');
const pkg = require('~/package.json');

// Internals ====================================
const internals = {
  defaults: {
    /* $lab:coverage:off$ */
    env: process.env.NODE_ENV || 'dev'
    /* $lab:coverage:on$ */
  }
};

// Config =======================================
internals.config = {
  root: path.join(__dirname, '../'),
  version: pkg.version,
  env: internals.defaults.env,
  manifest: {
    server: {
      host: 'localhost',
      port: 3000,
      http2: {
        key: path.join(__dirname, '../certs/selfsigned.key'),
        cert: path.join(__dirname, '../certs/selfsigned.crt'),
      }
    },
    register: {
      plugins: [
        { plugin: './plugins/plug.js' }
      ]
    }
  }
};

// Creating confidence store ====================
internals.store = new confidence.Store(internals.config);

// Exposing GET method fro retrieving conf ======
exports.get = (key, opts = {}) => {

  const criteria = Object.assign({}, internals.defaults, opts);

  return internals.store.get(key, criteria);
};
