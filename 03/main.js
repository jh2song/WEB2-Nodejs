var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    
    console.log(_url);  // /?id=HTML
    console.log(queryData); // { id: 'CSS' }
    console.log(queryData.id); // HTML

    if (_url == '/') {
        _url = '/index.html';
    }
    if (_url == '/favicon.ico') {
        return response.writeHead(404);
    }
    response.writeHead(200);
    // response.end(fs.readFileSync(__dirname + _url));
    response.end(queryData.id); // 화면에 key인 id에 대한 value가 웹페이지에 표시된다. (예, CSS)
});
app.listen(3000);