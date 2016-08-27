(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.get('github/users/silvershotm1/repos?sort=updated&per_page=10', function(data) {
      repos.all = data;
      callback(data);
      console.log(data);
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
