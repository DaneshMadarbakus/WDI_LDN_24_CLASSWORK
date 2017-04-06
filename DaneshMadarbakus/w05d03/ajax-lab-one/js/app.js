console.log('working ma homie');

var apiValue = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';

$(function(){
  startpage();
  $('#fresh').on('click', function(e){
    e.preventDefault();
    $('ul').empty();
    console.log('holla at ya boy');
    var search = $('input').val();
    apiValue = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC';
    startpage();
  });
  $('#more').on('click', function(e){
    e.preventDefault();
    console.log('its mad');
    var search = $('input').val();
    apiValue = 'http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC';
    startpage();
  });
});

function startpage(){
  $.get(apiValue)
  .done(function(data){
    $.each(data.data, function(index, post){
      $('ul').append('<li><embed src="' + post.embed_url + '"></li>');
    });
  })
  .fail(function(){
    console.log('error');
  });
}
