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
    developmentUrl: 'http://localhost:3003',       // url as seen by development client
    productionUrl: 'http://localhost:3030',        // url as seen by production client
  });

module.exports = nconf
