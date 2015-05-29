var TARGET = require('./sites').MODAVANTI;

var client = require('./driver'),
    chai = require('chai'),
    expect = chai.expect,
    assert = chai.assert;

describe('my webdriverio tests', function(){

    this.timeout(10000);

    before(function(done){
            client.init(done);
    });

    it.skip('Github test',function(done) {
        client
            .url('https://github.com/')
            .getElementSize('.header-logo-wordmark', function(err, result) {
                assert.equal(undefined, err);
                assert.strictEqual(result.height , 26);
                assert.strictEqual(result.width, 89);
            })
            .getTitle(function(err, title) {
                assert.equal(undefined, err);
                assert.strictEqual(title,'GitHub · Build software better, together.');
            })
            .getCssProperty('a[href="/plans"]', 'color', function(err, result){
                assert.equal(undefined, err);
                assert.strictEqual(result.value, 'rgba(65,131,196,1)');
            })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
});

describe('Given the target page ' + TARGET.name, function() {
    
    this.timeout(50000);

    before(function(done) {
        client.init(done);
    });

    it('Goto ' + TARGET.url + ' and check the title', function(done) {
        client
            .url(TARGET.url)
            .getTitle()
                .then(function(title) {
                    expect(title).to.equal(TARGET.title);
                })
                .catch(function(err) {
                    console.log('oops something went wrong', err);
                })
            .call(done);
    });

    it('check if the Email Sign Up form is visible and work', function(done) {
        client
            .isVisible('#SideNewsletterBox')
                .then(function(isVisible) {
                    expect(isVisible).to.be.true;
                })
            .setValue('#nl_first_name', 'hung')
            .setValue('#nl_email', 'hungcdqt+61@gmail.com')
            .submitForm('#subscribe_form')
            .url(function(err, res) {
                /*Object.keys(res).forEach(function(key) {
                    console.log(key, res[key]);
                });*/
                expect(res.value).to.equal('http://modavanti.com/subscribe.php');
                expect(res.status).to.equal(0);
            })
            .getTitle()
                .then(function(title) {
                    expect(title).to.equal(TARGET.title + ' - Newsletter Subscription');
                })
            .call(done);
    });

    it('Check source code', function(done) {
        client
            .getSource(function(err, source) {
                // console.log(source);
            })
            .call(done);
    });

    after(function(done) {
        client.end(done);
    });
})