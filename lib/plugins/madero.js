// Deps =========================================
const joi = require('joi');
const hoek = require('hoek');
const pkg = require('~/package.json');

// Declare internals ============================
const internals = {
  defaults: {}
};
const plugin = {
  name: 'madero',
  pkg
};

// Process signals logging ======================
internals.signals = (server) => {

};

// Register =====================================
plugin.register = (server, options) => {

  //== Declarations
  const { defaults, signals } = internals;
  const result = joi.validate(options, defaults);

  Joi.assert(settings, internals.schema, 'Invalid nes configuration');

  //== Validate options and apply defaults
  hoek.assert(!result.error, 'Invalid', 'maderoOptions', 'options', result.error);

  //== Signals
  const shutdown = (signal) => async () => {

    internals.write({ entry, async });
    await server.stop({ timeout: internals.settings.stopTimeoutMsec });
    console.log('Server stopped!');
  };

  process.once('SIGTERM', shutdown('SIGTERM'));
  process.once('SIGINT', shutdown('SIGINT'));

  // Exceptions
  process.on('uncaughtException', internals.uncaughtExceptionHandler);
  process.on('unhandledRejection', internals.unhandledRejectionHandler);

  // Server events

  // server.ext([{
  //     type: 'onPostStop',
  //     method: internals.onPostStop(monitor)
  // }, {
  //     type: 'onPreStart',
  //     method: internals.onPreStart(monitor, result.value)
  // }]);
};

// Expose =======================================
exports.plugin = plugin;
