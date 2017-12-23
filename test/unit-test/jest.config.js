module.exports = {
  rootDir: '../../',
  setupTestFrameworkScriptFile: './test/unit-test/jest.unit-test.init.js',
  testPathIgnorePatterns:[
    '/config/', //skip the test.js config file
    '/node_modules/'
  ]
};