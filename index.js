var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'ContenType': 'text/plan' });
    res.end('Hello Trung');
}).listen(8000);;

console.log('Server chạy ở http://127.0.0.1:8000 or localhost:8000');