// START JS CODE

<<<<<<< Updated upstream

//DOM--READY FUNCTION
$(function() {
  $('.tab-content').hide();
});
=======
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
>>>>>>> Stashed changes

// Navigation Handler Function

<<<<<<< Updated upstream
$('nav a').on('click', function() {
  var $navDirection = $(this).data('tab'); //gives us 'delegation' or 'attributes'
  $('.tab-content').hide();
  //we want $('#delegation')
  $('#' + $navDirection).fadeIn(750);
});
=======
projectView.toggleNavDisplay = function() {
<<<<<<< Updated upstream
=======

  var $counter = 0;
  $('.icon-menu').on('click',function() {
    if ($counter % 2 === 0) {
      $('.main-nav ul').show();
    } else {
      $('.main-nav ul').hide();
    }
    $counter ++;
  });
};
>>>>>>> Stashed changes

  var $counter = 0;
  $('.icon-menu').on('click',function() {
    if ($counter % 2 === 0) {
      $('.main-nav ul').show();
    } else {
      $('.main-nav ul').hide();
    }
    $counter ++;
  });
};
>>>>>>> Stashed changes

// LOG FUNCTION
function logItem() {
  console.log($(this));

<<<<<<< Updated upstream
  var $item = $(this).text();
}
=======
$(document).ready(function() {
  projectView.populateFilters();
  projectView.handleCategoryFilter();
  projectView.handleCoderFilter();
  projectView.handleMainNav();
  projectView.toggleNavDisplay();
  projectView.setTeasers();
});
>>>>>>> Stashed changes
