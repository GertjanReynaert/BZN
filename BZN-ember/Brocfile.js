/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import("vendor/ember-localstorage-adapter/localstorage_adapter.js");

module.exports = app.toTree();
