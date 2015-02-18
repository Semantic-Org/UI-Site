var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-site',
  summary : 'Semantic UI - Site (official): Single component release of site',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Site.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
