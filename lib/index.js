// Deps =========================================
const glue = require('glue');
const http2 = require('http2');
const fs = require('fs');
const config = require('../config');

// Expose =======================================
exports.start = (manifest) => {

  (async () => {
    try {
      let listener = null;
      let server = null;
      const optsH2 = manifest.server.http2 || false;
      const options = { relativeTo: `${ config.get('/root') }/lib` };

      // Do you want HTTP/2?
      if (optsH2) {
        delete manifest.server.http2; // Removing unwanted keys from options
        Object.keys(optsH2).map((key) => optsH2[key] = fs.readFileSync(optsH2[key])); // We only have paths, now read files
        listener = http2.createSecureServer(optsH2); // HTTP2 server
        // TODO: how to set this automatically?
        manifest.server.tls = true;
        Object.assign(manifest.server, { listener }); // Add listener to manifest
      }

      // Creating server with manifest
      server = await glue.compose(manifest, options);

      // await listen();
      await server.start();
      console.log(`Server started at: ${ server.info.uri }`);
    }
    catch (err) {
      console.log('error');
      console.error(err);
      process.exit(1);
    }
  })(); // <= Self executing async function
};
