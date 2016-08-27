(function(module) {
  var repoView = {};

  var ui = function() {
    var $blog = $('#blog'); // Best practice: Cache the DOM query if it's used more than once.

    $blog.find('ul').empty();
    $blog.show().siblings().hide();
  };

  var render = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {
    ui();

    $('#blog ul').append(

      repos.with('name').map(render)

    );
  };

  module.repoView = repoView;
})(window);
