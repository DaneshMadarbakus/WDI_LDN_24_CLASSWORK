$(start);

function start(){
  $(tweets).each(function(index,tweet){
    var tweetToAdd = buildTweet(tweet);
    var $ol = $('.stream-items');
    $ol.append(tweetToAdd);
  });

  var $tweetForm = $('#new-tweet-form');
  $tweetForm.on('submit', function(e){
    e.preventDefault();
    console.log('clicked');
    var tweet = {
      user_thumbnail: $('#thumbnail').attr('src'),
      name: 'Johnnie',
      screen_name: 'delamorinierejh',
      created_at: new Date(),
      text: $('textarea').val()
    };
    var newTweetToAdd = buildTweet(tweet);
    if (tweet.text.length > 0){
      $ol.prepend(newTweetToAdd);
    }
    var $ol = $('.stream-items');

  });

  function buildTweet(tweet){
    return '<li class="stream-item"><div class="tweet"><a href="#"><img src="' + tweet.user_thumbnail + '" alt="User image goes here."></a><div class="content"><strong class="fullname">' + tweet.name + '</strong><span>&rlm;</span><span>@</span><b>' + tweet.username + '</b>&nbsp;&middot;&nbsp;<small class="time">11m</small><p>' + tweet.text + '</p></div></div></li>';
  }
}
