// This file isn't transpiled, to must use CommonJS and ES5

// Register babel to transpile before out tests run.
require('babel-register')();

// Disable webpack feature that Mocha doesn't understand.
require.extensions['.css'] = function () {};
