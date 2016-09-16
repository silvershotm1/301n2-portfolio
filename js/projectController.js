(function(module) {
  var projectsController = {};
  Project.createTable();
  // Project.fetchAll(projectView.startIndexPage);

  projectsController.index = function(ctx, next) {
    projectView.index(ctx.projects);
    // $('.tab-content').hide();
    // $('#projects').fadeIn('slow');
  };

  // projectsController.index = function() {
  //   $('.tab-content').hide();
  //   $('#projects').fadeIn('slow');
  // };

  module.projectsController = projectsController;
})(window);
