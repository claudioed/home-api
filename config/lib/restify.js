'use strict';

var restify = require('restify');
var path = require('path');
var fs = require('fs');
var config = require('../config');

module.exports.initModuleServerRoutes = function(app) {
  config.files.routes.forEach(function(route) {
    require(path.resolve(route))(app);
  });
};

module.exports.init = function() {
  var serverOptions = {
    log: config.logger,
    name: config.server.name,
    certificate: config.server.https === 'true' ? fs.readFileSync('./config/ssl/cert.pem', 'utf8') : null,
    key: config.server.https === 'true' ? fs.readFileSync('./config/ssl/key.pem', 'utf8') : null
  };
  var app = restify.createServer(serverOptions);

  app.use(restify.CORS()); // eslint-disable-line new-cap

  this.initModuleServerRoutes(app);

  return app;
};
