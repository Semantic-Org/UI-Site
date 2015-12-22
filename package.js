
Package.describe({
  name    : 'semantic:ui-site',
  summary : 'Semantic UI - Site: Single component release',
  version : '2.1.7',
  git     : 'git://github.com/Semantic-Org/UI-Site.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'site.css',
    'site.js'
  ], 'client');
});
