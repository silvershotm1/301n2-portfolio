(function(module) {
  var blogController = {};

  blogController.index = function() {

    $('#blog').show().siblings().hide();

    repos.requestRepos(repoView.index);

  };

  module.blogController = blogController;
})(window);
