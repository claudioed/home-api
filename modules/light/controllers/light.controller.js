'use strict';

var Light = require('../models/light.model');

exports.allLightMeasures = function(req, res, next) {
  Light.find({}, function(err, data) {
    if (err) {
      res.send(500, {error: 'Error on process request!'});
      return next();
    }
    if (data) {
      res.send(200, {data: data});
    } else {
      res.send(404, {message: 'No data found'});
    }
  });
  return next();
};
