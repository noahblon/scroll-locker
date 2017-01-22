var SauceLabs = require("saucelabs");
exports.command = function(cb) {
    console.log(cb);
    console.log(SauceLabs);
    var saucelabs = new SauceLabs({
        username: 'noah7979',
        password: 'fe6cc132-1bfc-4017-b29d-e0d5be54f9b8'
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
