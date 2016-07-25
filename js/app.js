// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var projectView = {};

projectView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#coder-filter').append(optionTag);
      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

projectView.handleDevFilter = function() {
  $('#coder-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-coders="' + $(this).val() + '"]').fadeIn();
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
      $('article[data-category="' + $(this).val() + '"]').fadeIn('slow');
    } else {
      $('article').fadeIn('slow');
      $('article.template').hide('fast');
    }
    $('#coder-filter').val('');
  });
};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn('fast');
  });

  $('.main-nav .tab:first').click();
};

projectView.toggleNavDisplay = function() {
  $('.icon-menu').on('click', function(e) {
    $('.main-nav ul').toggle();
  });
};

projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').hide();
  $('#projects').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

$(document).ready(function() {
  projectView.populateFilters();
  projectView.handleCategoryFilter();
  projectView.handleDevFilter();
  projectView.handleMainNav();
  projectView.toggleNavDisplay();
  projectView.setTeasers();
});
