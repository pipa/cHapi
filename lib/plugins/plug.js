// Deps =========================================
const pkg = require('~/package.json');

// Declare internals ============================
const internals = {
  name: 'myPlug',
  pkg
};

// Register =====================================
internals.register = (server, options) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => 'ok'
  });
};

// Expose =======================================
exports.plugin = internals;
