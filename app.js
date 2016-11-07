$('document').ready(function(){

  $('button').on('click', function(){
    var buttonColor = $(this).attr('data-color');
    var buttonId = "#"+$(this).attr('data-color');
    var num = parseInt($(buttonId).find('.counter').text());
    $(buttonId).find('.counter').text(num+1);
    
  });
});
