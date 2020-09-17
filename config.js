'use strict';
// EcmaScript 5.1 due to vue-cli configuration file import compatibility

const nconf = require('nconf')

nconf.env(['PORT', 'NODE_ENV'])
  .argv({
    'e': {
      alias: 'NODE_ENV',
      describe: 'Set production or development environment.',
      demand: false,
      default: 'development'
    }
  })
  .defaults({
    development: { // lookup information by the client
      port: 3003,
      baseUrl: 'http://localhost'
    },
    production: { // lookup information by the client
      port: 3030,
      baseUrl: 'http://localhost'
    }
  });

module.exports = nconf
