// console.log('working');
//
// window.addEventListener('DOMContentLoaded', function(event) {
//
//   var audio = document.getElementById('audio');
//   audio.src = 'http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3';
//   audio.play();
//   audio.controls = 'controls';
// });
console.log('working');

document.addEventListener('DOMContentLoaded', start);

function start() {
  var playButton = document.getElementById('playButton');
  var audio = document.getElementById('audio');

  playButton.addEventListener('click', go);

  function go() {
    audio.src = 'http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3';
    audio.play();
  }
}
