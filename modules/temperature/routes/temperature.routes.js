'use strict';

var controller = require('../controllers/temperature.controller');

module.exports = function(app) {
  app.get('/temperatures/', controller.allTemperatures);
};
