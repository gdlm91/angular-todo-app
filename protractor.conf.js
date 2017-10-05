// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

const fs = require('fs');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  multiCapabilities: [{
    browserName: 'chrome'
  }, {
    browserName: 'firefox'
  }],
  // directConnect doesn't work with latest versions of Firefox. We need to use the
  // stand-alone webdriver
  // directConnect: true,
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  beforeLaunch: function () {
    // Create a clean Json DB
    fs.writeFileSync('./db.json', JSON.stringify({ todos: [] }), 'utf-8');
  },
  onPrepare() {
    // Moved to onPrepare to fix compilation when using multiple browers:
    // see https://github.com/angular/angular-cli/issues/975
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
