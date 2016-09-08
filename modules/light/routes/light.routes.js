'use strict';

var controller = require('../controllers/light.controller');

module.exports = function(app) {
  app.get('/lights/', controller.allLightMeasures);
};
