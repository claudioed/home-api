'use strict';

var glob = require('glob');
var _ = require('lodash');
var path = require('path');
var bunyan = require('bunyan');

/*
 * Get files by glob patterns
 */
var getGlobbedPaths = function(globPatterns, excludes) {
  // URL paths regex
  var urlRegex = new RegExp('^(?:[a-z]+:)?\/\/', 'i');

  // The output array
  var output = [];

  // If glob pattern is array then we use each pattern in a recursive way, otherwise we use glob
  if (_.isArray(globPatterns)) {
    globPatterns.forEach(function(globPattern) {
      output = _.union(output, getGlobbedPaths(globPattern, excludes));
    });
  } else if (_.isString(globPatterns)) {
    if (urlRegex.test(globPatterns)) {
      output.push(globPatterns);
    } else {
      var files = glob.sync(globPatterns);
      if (excludes) {
        files = files.map(function(file) {
          if (_.isArray(excludes)) {
            for (var i in excludes) {
              if ({}.hasOwnProperty.call(excludes, i)) {
                file = file.replace(excludes[i], '');
              }
            }
          } else {
            file = file.replace(excludes, '');
          }
          return file;
        });
      }
      output = _.union(output, files);
    }
  }

  return output;
};

var setupLogger = function() {
  return bunyan.createLogger({
    name: process.env.APP_SERVER_NAME,
    serializers: {
      app: function(app) {
        if (app) {
          return {
            appName: app.name,
            appUrl: app.url
          };
        }
      },
      req: bunyan.stdSerializers.req,
      res: bunyan.stdSerializers.res
    }
  });
};

var initServerSettings = function(config) {
  config.server = {};
  config.server.port = process.env.APP_SERVER_PORT;
  config.server.name = process.env.APP_SERVER_NAME;
  config.server.https = process.env.APP_SERVER_HTTPS;
};

var initDbSettings = function(config) {
  config.db = {};
  config.db.path = process.env.APP_DB_PATH;
};

var initGlobalConfigFiles = function(config, assets) {
  config.files = {};
  config.files.routes = getGlobbedPaths(assets.server.routes);
  config.files.models = getGlobbedPaths(assets.server.models);
};

var initGlobalConfig = function() {
  var config = {};
  var assets = require(path.join(process.cwd(), 'config/assets'));

  initServerSettings(config);
  initDbSettings(config);
  config.logger = setupLogger();
  initGlobalConfigFiles(config, assets);

  return config;
};

module.exports = initGlobalConfig();
