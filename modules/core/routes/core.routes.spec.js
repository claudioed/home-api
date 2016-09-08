'use strict';

var chai = require('chai');
var expect = chai.expect;
var supertest = require('supertest');
var server = supertest.agent("http://localhost:7000");

describe('core.routes', function() {
  it('should return 200 response code on `/` GET request', function(done) {
    server
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return;
        }
        expect(res.status).to.equal(200);
        done();
      });
  });
  it('should return 404 response code on GET request with bad path name', function(done) {
    server
      .get('/parp')
      .expect(404)
      .end(function(err, res) {
        if (err) {
          return;
        }
        expect(res.status).to.equal(404);
        done();
      });
  });
});
