var TARGET = require('./sites').EXPERTHINTMD;

var client = require('./driver'),
    chai = require('chai'),
    expect = chai.expect,
    // assert = chai.assert;
    assert = require('assert');


// initialise WebdriverCSS for `client` instance
require('webdrivercss').init(client, {
    // example options
    screenshotRoot: 'my-shots',
    failedComparisonsRoot: 'diffs',
    misMatchTolerance: 0.05,
    screenWidth: 1440 //[320,480,640,1024]
});


describe.only('Regression test for ' + TARGET.name, function() {
    this.timeout(60000);

    before(function(done) {
        client.init(done).url(TARGET.url);
        console.log(client);
    });

    it.skip('The utilitymenu should always look the same for guess', function(done) {
        client
            .webdrivercss('utilitymenu', {
                name: 'utilitymenu',
                elem: '#utilitymenu-region'
            }, function(err, res) {
                expect(res.utilitymenu[0].isWithinMisMatchTolerance).to.be.true;
            })
            .call(done);
    })

    it.skip('The footer should always look the same', function(done) {
        client
            // .url(TARGET.url)
            .webdrivercss('footer', {
                name: 'footer',
                elem: 'div.footer'
            }, function(err, res) {
                console.log('err', err);
                console.log('res', res);
                // assert.ifError(err);
                // assert.ok(res.isWithinMisMatchTolerance);
                expect(res.footer[0].isWithinMisMatchTolerance).to.be.true;
                done(err);
            });
    });

    it.only('The landing page always look the same', function(done) {
        client
            // .url(TARGET.url)
            .webdrivercss('doctor portal landing page', {
                name: 'landingpage',
                elem: 'body'
            }, function(err, res) {
                console.log('err', err);
                console.log('res', res);
                // assert.ifError(err);
                assert.ok(res.landingpage[0].isWithinMisMatchTolerance);
                // expect(res.footer[0].isWithinMisMatchTolerance).to.be.true;
                done(err);
            });
    });

    after(function(done) {
        client.end(done);
    });
})