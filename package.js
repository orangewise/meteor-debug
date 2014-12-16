Package.describe({
  name: 'robodo:meteor-debug',
  summary: 'Meteor wrapper for npm debug.',
  version: '2.1.0',
  git: "https://github.com/orangewise/meteor-debug"
});

Npm.depends({'debug': '2.1.0'});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('debug.js','client');
  api.addFiles('server.js','server');
  api.export('debugs');
});
