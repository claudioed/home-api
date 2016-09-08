'use strict';

var config = require('./config/config');
var restify = require('./config/lib/restify');
var mongoose = require('./config/lib/mongoose');
var logger = config.logger;

var app = restify.init();

mongoose.connect(function() {
  app.listen(config.server.port, function() {
    logger.info({app: app}, '%s listening at %s', app.name, app.url);
  });
});

