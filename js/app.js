// START JS CODE


//DOM--READY FUNCTION
$(function() {
  $('.tab-content').hide();
});

// Navigation Handler Function

$('nav a').on('click', function() {
  var $navDirection = $(this).data('tab'); //gives us 'delegation' or 'attributes'
  $('.tab-content').hide();
  //we want $('#delegation')
  $('#' + $navDirection).fadeIn(750);
});

// LOG FUNCTION
function logItem() {
  console.log($(this));

  var $item = $(this).text();
}
