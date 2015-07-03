browserNames = ['phantomjs', 'chrome', 'firefox'];
var options = {
    desiredCapabilities: {
        browserName: browserNames[2]
    }
};

// http://stackoverflow.com/questions/27878208/webdriver-http-authentication-dialog
// FirefoxProfile firefoxProfile = new ProfilesIni().getProfile("default");
// File pluginAutoAuth = new File("/home/hungcao/Downloads/autoauth-2.1-fx+fn.xpi");
// firefoxProfile.addExtension(pluginAutoAuth);
// return new FirefoxDriver(firefoxProfile);

var webdriverio = require('webdriverio').remote(options);

module.exports = webdriverio;

