/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import("bower_components/ember-localstorage-adapter/localstorage_adapter.js");

module.exports = app.toTree();
