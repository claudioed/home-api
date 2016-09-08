'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TemperatureSchema = new Schema({
  deviceId: Number,
  degrees: Number,
  measureAt: {type: Date, default: Date.now}
});

mongoose.model('Temperature', TemperatureSchema);
var Temperature = mongoose.model('Temperature');

module.exports = Temperature;
