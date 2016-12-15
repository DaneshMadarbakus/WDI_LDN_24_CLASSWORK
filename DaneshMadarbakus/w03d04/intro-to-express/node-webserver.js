var http = require('http');

var app = http.createServer(function(request, response) {

  var answer = '';
  answer += 'Request URL: ' + request.url + '\n';
  answer += 'Request type/verb: ' + request.method + '\n';
  answer += 'Request headers: ' + JSON.stringify(request.headers) + '\n';

  response.writeHead(200, {
    'content-Type': ' text/plain'
  });
  response.end(answer);
});

app.listen(3000, function(){
  console.log('Server running on localhost');
});
