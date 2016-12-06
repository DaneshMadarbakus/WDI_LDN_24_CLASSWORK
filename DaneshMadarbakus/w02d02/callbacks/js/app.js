// function capitalise (word) {
//   return word.chartAt(0).toUpperCase() +
//   word.toLowerCase().splice(1);
// }
//
// function greet(name, callback) {
//   console.log('Hello' + callback(name));
// }
//
// greet('Alex', capitalise);

var CallbackLesson = CallbackLesson || {};

function loaded(){
  document.getElementById('hello').addEventListener('click', CallbackLesson.clicked);
}

function clicked(){
  console.log(this, 'was clicked');
}

document.addEventListener('DOMContentLoaded', CallbackLesson.loaded);
