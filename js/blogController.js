(function(module) {
  var blogController = {};

  blogController.index = function() {
    $('.tab-content').hide();
    $('#blog').fadeIn('slow');

    // repos.reqRepos(repoView.index);
  };

  module.blogController = blogController;
})(window);
