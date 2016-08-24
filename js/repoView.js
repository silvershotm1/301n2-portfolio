(function(module) {

  var repoView = {};

  var ui = function() {
    var $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  var render = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {
    ui();
    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;

})(window);
