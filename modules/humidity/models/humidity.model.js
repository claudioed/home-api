'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HumiditySchema = new Schema({
  deviceId: Number,
  value: Number,
  measureAt: {type: Date, default: Date.now}
});

mongoose.model('Humidity', HumiditySchema);
var Humidity = mongoose.model('Humidity');

module.exports = Humidity;
