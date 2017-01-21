// test/e2e/simple/simpleTest.js
module.exports = {
  beforeEach: browser => {
    browser
      .url('http://localhost:8000')
      .waitForElementVisible('body')
  },
  'Smoke test': browser => {
    browser
      .assert.visible('body', 'yah?')
  },
  after: browser => browser.end(),
};
