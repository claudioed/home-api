'use strict';

var chai = require('chai');
var expect = chai.expect;
var supertest = require('supertest');
var server = supertest.agent("http://localhost:7000");

describe('core.routes', function() {
  it('should return 404 response code on `/hello` GET request', function(done) {
    server
      .get('/hello')
      .expect(404)
      .end(function(err, res) {
        if (err) {
          return;
        }
        expect(res.status).to.equal(404);
        done();
      });
  });
  it('should return 200 response code on `/hello/:param` GET request', function(done) {
    server
      .get('/hello/wibble')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return;
        }
        expect(res.status).to.equal(200);
        done();
      });
  });
});
