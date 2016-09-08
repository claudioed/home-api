'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LightSchema = new Schema({
  deviceId: Number,
  value: Number,
  measureAt: {type: Date, default: Date.now}
});

mongoose.model('Light', LightSchema);
var Light = mongoose.model('Light');

module.exports = Light;
