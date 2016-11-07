$('document').ready(function(){

  $('.color-button').on('click', function(){

    // get the color the button is related to
    var buttonColor = $(this).attr('data-color');
    // create the button ID with concatenation so it can be used later
    var buttonId = "#"+$(this).attr('data-color');
    // create variable of the counter to be incremented
    var counter = $(buttonId).find('.counter');
    // make the text into a number
    var num = parseInt(counter.text());
    // increment the counter then change the text to this number
    counter.text(num + 1);

    //append divs to DOM with classes which create styles
    $('.container').append('<div class="' + buttonColor +  ' color-cube"</div>');
  });
});
