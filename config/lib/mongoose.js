'use strict';

var config = require('../config');
var path = require('path');
var mongoose = require('mongoose');
var logger = config.logger;

module.exports.loadModels = function() {
  if (config.server.models) {
    config.server.models.forEach(function(modelPath) {
      require(path.resolve(modelPath));
    });
  }
};

module.exports.connect = function(cb) {
  var self = this;
  var db;

  db = mongoose.connect(config.db.path, function(err) {
    if (err) {
      logger.error({}, 'Could not connect to MongoDB %s', err);
    } else {
      self.loadModels();
      logger.info({}, 'Connected to MongoDB %s', config.db.path);
      if (cb) {
        cb(db);
      }
    }
  });
};

module.exports.disconnect = function(cb) {
  mongoose.disconnect(function(err) {
    logger.info({}, 'Disconnect from MongoDB');
    cb(err);
  });
};
