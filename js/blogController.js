(function(module) {
  var blogController = {};

  blogController.index = function() {
    $('tab-content').hide();
    $('#blog').fadeIn('slow');
  };

  module.blogController = blogController; 
})(window);
