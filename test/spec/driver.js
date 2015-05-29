browserNames = ['phantomjs', 'chrome', 'firefox'];
var options = {
    desiredCapabilities: {
        browserName: browserNames[0]
    }
};
var webdriverio = require('webdriverio').remote(options);

module.exports = webdriverio;