/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import("bower_components/firebase/firebase-debug.js");

module.exports = app.toTree();
