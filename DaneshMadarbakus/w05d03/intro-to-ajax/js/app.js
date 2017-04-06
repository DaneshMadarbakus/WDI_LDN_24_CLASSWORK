//JQuery
console.log($, 'working ma homie');

$(function() {
  $('button').on('click', function() {
    $.get('https://jsonplaceholder.typicode.com/posts')
    .done(function(data){
      $.each(data, function(index, post) {
        $('ul').append('<li>' + post.title + '</li>');
      });
    })
    .fail(function(){
      console.log('error');
    });
  });
});

// Longer syntax
//
// $.ajax({
//   url: 'https://jsonplaceholder.typicode.com/posts',
//   type: 'POST',
//   data: post,
//   dataType: 'XML'
// }).done(function(data){
// });



// VANILLA JAVASCRIPT
// console.log('working ma homie');
//
// var request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
//
// request.onload = function() {
//   if ( request.status >= 200 && request.status < 400){
//     //Success
//     var resp = request.responseText;
//     console.log(resp);
//   } else {
//     //Server error
//     console.log('An error on the server side');
//   }
// };
//
// request.onerror = function(){
//   //Client side error
//   console.log('Something went wrong with the client side');
// };
//
// request.send();
