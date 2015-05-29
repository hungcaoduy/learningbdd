var TARGET = require('./sites').MODAVANTI;

var client = require('./driver'),
    chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;

// initialise WebdriverCSS for `client` instance
require('webdrivercss').init(client, {
    // example options
    screenshotRoot: 'my-shots',
    failedComparisonsRoot: 'diffs',
    misMatchTolerance: 0.05,
    screenWidth: [320,480,640,1024]
});

describe('Test login feature of site ' + TARGET.name, function() {
	this.timeout(10000);

	before(function(done) {
		client.init(done);
	});

	it('The header (TopMenu) should always look the same', function(done) {
		client
			.url(TARGET.url)
			.webdrivercss('header', {
				name: 'header',
				elem: '#home > div.footer'
			}, function(err, res) {
				// assert.ifError(err);
				// expect(err).to.be.null;
				// assert.ok(res.isWithinMisMatchTolerance);
			})
			.call(done);
	});

    after(function(done) {
        client.end(done);
    });
})