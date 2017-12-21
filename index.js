// Deps =========================================
const config = require('./config');
const server = require('./lib');

// Kickstart Server =============================
server.start(config.get('/manifest'));
