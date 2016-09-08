'use strict';

exports.renderStatus = function(req, res, next) {
  res.send({
    server: res.serverName,
    status: 'OK'
  });
  return next();
};
