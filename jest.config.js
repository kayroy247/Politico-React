// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  automock: false,
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverage: true,

  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],

  coverageReporters: [
    'text',
    'text-lcov',
  ],


  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [
    'node_modules', 'src',
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'node',
  ],

  // Use this configuration option to add custom reporters to Jest
  // reporters: undefined,

  // Automatically reset mock state between every test
  // resetMocks: false,

  // Reset the module registry before running each individual test
  // resetModules: false,

  // A path to a custom resolver
  // resolver: null,

  // Automatically restore mock state between every test
  // restoreMocks: false,

  // The root directory that Jest should scan for tests and modules within
  // rootDir: null,

  // A list of paths to directories that Jest should use to search for files in
  // roots: [
  //   "<rootDir>"
  // ],

  // Allows you to use a custom runner instead of Jest's default test runner
  // runner: "jest-runner",


  testEnvironment: 'jest-environment-jsdom',

  testPathIgnorePatterns: [
    '/node_modules/',
  ],

  // The regexp pattern or array of patterns that Jest uses to detect test files
  // testRegex: [],

  // This option allows the use of a custom results processor
  // testResultsProcessor: null,

  // This option allows use of a custom test runner
  // testRunner: "jasmine2",

  testURL: 'http://localhost',

  // Setting this value to "fake" allows the use of fake timers for functions such as "setTimeout"
  // timers: "real",

  // A map from regular expressions to paths to transformers
  // transform: null,

  // Indicates whether each individual test should be reported during the run
  // verbose: null,

};
