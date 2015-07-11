var HelloController = require('../../api/controllers/HelloWorldController'),
    assert = require('chai').assert,
    request = require('supertest'),
    url = 'http://localhost:1337';

describe('The Hello Controller', function() {
    var Sails = require('sails'),
        sails;

    before(function(done) {
      Sails.lift({}, function(err, server) {
        sails = server;
        if (err) return done(err);
            done(err, sails);
        });
    });

    after(function(done) {
        Sails.lower(done);
    });

    describe('GET /helloworld', function() {
        it('should return hello world message', function(done) {
            request(url)
                .get('/HelloWorld')
                .end(function(err, res) {
                    if (err) {
                        throw err;
                    }

                    assert(res.status, 200);
                    assert(res.text, 'Hello World');
                    done();
                });
        });
    });
});