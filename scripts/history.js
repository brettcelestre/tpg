$(document).ready(function(){
  
  var $fullHistoryBtn = $('.view-full-history'),
      $fullHistoryText = $('.full-history'),
      $historyViewStatus = $('.view-full-history span');
  
  $historyViewStatus.text('View');
  
  // Opens modal
  $fullHistoryBtn.click(function(e){
    
    if( $historyViewStatus.text() === 'View' ) {
      // Shows full history
      $fullHistoryText.css('display', 'block');
      $historyViewStatus.text('Hide');
    } else {    
      // Hides full history
      $fullHistoryText.css('display', 'none');
      $historyViewStatus.text('View');
    }
  });
  
});