(function(module) {
  var repoView = {};

  var ui = function() {
    var $github = $('#github'); // Best practice: Cache the DOM query if it's used more than once.

    $github.find('ul').empty();
    $github.show().siblings().hide();
  };

  var render = Handlebars.compile($('#repo-template').html());

  repoView.index = function() {
    ui();

    $('#github ul').append(

      repos.with('name').map(render)

    );
  };

  module.repoView = repoView;
})(window);
