exports.command = function(cb) {
    console.log(cb);
    var SauceLabs = require("saucelabs");
    console.log(SauceLabs);
    var saucelabs = new SauceLabs({
        username: process.env.SAUCE_USERNAME,
        password: process.env.SAUCE_ACCESS_KEY
    });
    console.log(saucelabs);
    var sessionid = this.capabilities['webdriver.remote.sessionid'];
    var jobName = this.currentTest.name;

    saucelabs.updateJob(sessionid, {
        passed: this.currentTest.results.failed === 0,
        name: jobName
    }, cb);

    console.log("SauceOnDemandSessionID=" + sessionid + " job-name=" + jobName);
};
