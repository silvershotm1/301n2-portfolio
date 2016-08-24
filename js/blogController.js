(function(module) {
  var blogController = {};

  blogController.index = function() {
    $('.tab-content').hide();
    console.log('hello')
    $('#blog').show().siblings().hide();
  };

  repos.requestRepos(repoView.index);

  module.blogController = blogController;
})(window);
