(function(module) {
  var blogController = {};

  blogController.index = function() {

    repos.reqRepos(repoView.index);
  };

  module.blogController = blogController;
})(window);
