'use strict';

var Temperature = require('../models/temperature.model');

exports.allTemperatures = function(req, res, next) {
  Temperature.find({}, function(err, data) {
    if (err) {
      res.send(404, {error: 'Error on process request!'});
      return next();
    }
    if (data.length) {
      res.send(200, {data: data});
    } else {
      res.send(404, {message: 'No data found'});
    }
  });
  return next();
};
