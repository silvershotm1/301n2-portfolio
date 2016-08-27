(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'github/users/silvershotm1/repos?sort=updated&per_page=10',
      type: 'GET',
    }).success(function (data) {
      console.log('loading!');
      repos.all = data;
      repos.all = repos.without('fork');
    }).error(function(x, text, error) {
      console.log(error);
    }).done(
      callback()
    );
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
