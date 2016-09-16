(function(module) {
  var githubController = {};

  githubController.index = function() {

    repos.reqRepos(repoView.index);

    // $('.tab-content').hide();
    // $('#github').fadeIn('slow');
  };

  module.githubController = githubController;

})(window);
