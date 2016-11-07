$('document').ready(function(){

  $('button').on('click', function(){
    var buttonColor = $(this).attr('data-color');
    var buttonId = "#"+$(this).attr('data-color');
    var num = parseInt($(buttonId).find('.counter').text());
    $(buttonId).find('.counter').text(num+1);

    //var squareClass = "."+buttonColor;
    //console.log(squareClass);
    $('.container').append('<div class="' + buttonColor +  ' color-cube"</div>');
  });
});
