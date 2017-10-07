

var mobileMenu = function(){
  $('.menu-icon').toggleClass('menu-icon-close');
  $('.mobile-options').toggleClass('open');
  
  if ( $('.navigation').hasClass('fixed') ) {
    // console.log('UNLOCKED');
    // un-lock scroll position
    // var html = jQuery('html');
    // var scrollPosition = html.data('scroll-position');
    // html.css('overflow', html.data('previous-overflow'));
    // window.scrollTo(scrollPosition[0], scrollPosition[1])

    $('.navigation').removeClass('fixed');
    $('.home').css('margin-top', '0px');
    $('.about').css('margin-top', '0px');
    $('.services').css('margin-top', '0px');
    $('.marketplace').css('margin-top', '0px');
    $('.news').css('margin-top', '0px');
    $('.contact-us').css('margin-top', '0px');
    $('.menu-fade').css('display', 'none');
  } else {
    // console.log('EXPAND');
    // lock scroll position, but retain settings for later
    // var scrollPosition = [
    //   self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    //   self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
    // ];
    // var html = jQuery('html'); // it would make more sense to apply this to body, but IE7 won't have that
    // html.data('scroll-position', scrollPosition);
    // html.data('previous-overflow', html.css('overflow'));
    // html.css('overflow', 'hidden');
    // window.scrollTo(scrollPosition[0], scrollPosition[1]);

    $('.navigation').addClass('fixed');
    $('.home').css('margin-top', '90px');
    $('.about').css('margin-top', '90px');
    $('.services').css('margin-top', '90px');
    $('.marketplace').css('margin-top', '90px');
    $('.news').css('margin-top', '90px');
    $('.contact-us').css('margin-top', '90px');
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

  var newDate = new Date(),
    year = newDate.getFullYear();
  
  $('#year').html(year);

});