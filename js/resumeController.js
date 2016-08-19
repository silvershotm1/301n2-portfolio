(function(module) {
  var resumeController = {};

  resumeController.index = function() {
    $('tab-content').hide();
    $('#resume').fadeIn('slow');
  };

  module.resumeController = resumeController;

})(window);
