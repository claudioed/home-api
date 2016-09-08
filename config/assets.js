'use strict';

module.exports = {
  server: {
    allJs: [
      'server.js',
      'config/**/*.js',
      'modules/**/*.js'
    ],
    models: 'modules/*/models/**/*.model.js',
    routes: 'modules/*/routes/**/*.routes.js',
    controllers: 'modules/*/controllers/**/*.controller.js'
  }
};
