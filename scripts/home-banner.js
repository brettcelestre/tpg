$(document).ready(function(){
  var count = 0;
  setInterval(function transitions(){
    $('.banner-' + count).removeClass('opaque');
    count == 2 ? count = 0 : count ++;
    $('.banner-' + count).addClass('opaque');
  }, 6000);
});