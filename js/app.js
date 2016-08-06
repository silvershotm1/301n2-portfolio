(function(module) {
  var projectView = {};

  projectView.populateFilters = function() {
    $('article').each(function() {
      if (!$(this).hasClass('template')) {
        var val = $(this).find('address a').text();
        var optionTag = '<option value="' + val + '">' + val + '</option>';
        if ($('#coder-filter option[value="' + val + '"]').length === 0) {

          $('#coder-filter').append(optionTag);
        }

        val = $(this).attr('data-category');
        optionTag = '<option value="' + val + '">' + val + '</option>';
        if ($('#category-filter option[value="' + val + '"]').length === 0) {
          $('#category-filter').append(optionTag);
        }
      }
    });
  };

  projectView.handleCoderFilter = function() {
    $('#coder-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-coder="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#category-filter').val('');
    });
  };

  projectView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + $(this).val() + '"]').fadeIn();
      } else {
        $('article').fadeIn();
        $('article.template').hide();
      }
      $('#coder-filter').val('');
    });
  };

  projectView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function(e) {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn();
    });

    $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
  };

  projectView.toggleNavDisplay = function() {
    $('.icon-menu').on('click',function() {
      $('.main-nav ul').toggle('slow');

    });
    $(window).on('resize', function() {
      if ($(window).width() >= 680) {
        $('.main-nav ul').show();
      } else {
        $('.main-nav ul').hide();
      }
    });
  };

  projectView.setTeasers = function() {
    $('.project-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.
    $('a.read-less').hide();

    $('#projects').on('click', 'a.read-on', function(e) {
      e.preventDefault();
      $(this).parent().find('*').fadeIn();
      $(this).hide();
      $('a.read-on').hide();                      // Hides all "More" when indiv article selected
    });
    $('#projects').on('click', 'a.read-less', function(e) {
      e.preventDefault();
      $('.project-body *:nth-of-type(n+2)').fadeOut('fast');
      $(this).hide();
      $('a.read-on').show();
    });
  };

  ////////////// CALL OF NEW PROJECT, ADMIN, and INDEX PAGES /////////////////////

  projectView.startIndexPage = function() {
    Project.all.forEach(function(a) {
      $('#projects').append(a.toHtml());
    });
    projectView.populateFilters();
    projectView.handleCategoryFilter();
    projectView.handleCoderFilter();
    projectView.handleMainNav();
    projectView.toggleNavDisplay();
    projectView.setTeasers();
  };


  projectView.startNewProjectPage = function() {
    $('tab-content').show();
    $('#export-field').hide();
    $('#project-json').on('focus', function() {
      this.select();
    });
    $('#new-form').on('change', 'input, textarea', projectView.create);
  };

  projectView.create = function() {
    var project;
    $('#projects').empty();

    project = new Project({
      title: $('#project-title').val(),
      author: $('#project-coder').val(),
      authorUrl: $('#project-coder-url').val(),
      category: $('#project-category').val(),
      body: $('#project-body').val(),
      publishedOn: $('#project-published:checked').length ? util.today() : null
    });

    $('#projects').append(project.toHtml());

    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });

    // GETS INFO JSON READY
    $('export-field').show();
    $('project-json').val(JSON.stringify(project) + ',');
  };

  projectView.startAdminPage = function() {
    var source = $('#coder-template').html();
    var template = Handlebars.compile(source);

    Project.numWordsByCoder().forEach(function(stats) {
      $('.coder-stats').append(template(stats));
    });

    $('#blog-stats .projects').text(Project.all.length);
    $('#blog-stats .words').text(Project.numWordsAll());
  };
  //////////////////PURGE LOCAL STORAGE///////////////////////////////////////////
  // function purgeLocalStorage() { //Function to purge the local storage
  //   localStorage.clear();  //Clears local storage
  // }
  // purgeLS.addEventListener('click', purgeLocalStorage);
  // ////

  module.projectView = projectView;
})(window);
