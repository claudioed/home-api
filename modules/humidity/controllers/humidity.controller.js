'use strict';

var Humidity = require('../models/humidity.model');

exports.allHumidities = function(req, res, next) {
  Humidity.find({}, function(err, data) {
    if (err) {
      res.send(404, {message: 'Error on process request!'});
    } else {
      res.send(200, {
        data: data
      });
    }
  });
  return next();
};
