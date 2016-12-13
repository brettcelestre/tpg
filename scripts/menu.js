

var mobileMenu = function(){
  $('.menu-icon').toggleClass('menu-icon-close');
  $('.mobile-options').toggleClass('open');
  
  if ( $('.navigation').hasClass('fixed') ) {
    $('.navigation').removeClass('fixed');
    $('.home').css('margin-top', '0px');
    $('.menu-fade').css('display', 'none');
  } else {
    $('.navigation').addClass('fixed');
    $('.home').css('margin-top', '90px');
    $('.menu-fade').css('display', 'block');
  }
}
  
  
$(document).ready(function(){
  
  $('.menu-mobile').click(function(){
    mobileMenu();
  });
  
  $('.menu-fade').click(function(){
    mobileMenu();
  });

});