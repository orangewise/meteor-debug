// Setup debugging in orangewise namespace.
var d = debug('orangewise/debug_server.js');

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    d('starting up');
  });
}
