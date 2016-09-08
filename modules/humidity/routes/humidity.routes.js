'use strict';

var controller = require('../controllers/humidity.controller');

module.exports = function(app) {
  app.get('/humidities/', controller.allHumidities);
};
