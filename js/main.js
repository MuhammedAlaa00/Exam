$(function () {
    
    $('header').height($(window).height());
    $('h1').each(function () {
       $(this).css('padding-top', ($('header').height() - $('h1').height()) / 2);
    });
    $('h1').each(function () {
       $(this).css('left', '35%');
    });
    var mixer = mixitup('.work-mixer', {
    animation: {
    duration: 600
        }
    });
  });