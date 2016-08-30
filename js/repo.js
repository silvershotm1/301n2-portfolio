(function(module) {
  var repos = {};

  repos.all = [];

  repos.reqRepos = function(callback) {
    $.get('github/users/silvershotm1/repos?sort=updated&per_page=10', function(data) {
      repos.all = data;
      callback(data);
    });
  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  repos.without = function(attr) {
    return repos.all.filter(function(repo) {
      return !repo[attr];
    });
  };

  module.repos = repos;
})(window);
