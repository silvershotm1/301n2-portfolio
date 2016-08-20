(function(module) {
  var projectsController = {};

  Project.fetchAll(projectView.startIndexPage);

  projectsController.index = function() {
    $('.tab-content').hide();
    $('#projects').fadeIn('slow');
  };

  module.projectsController = projectsController;
})(window);
