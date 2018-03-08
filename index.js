var http = require('http');
//vd1 
// var server = http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-type': 'text/html'
//     })
//     res.write('<h1>Hello World</h1>');
//     res.end();
// });
// server.listen(8000);
// console.log('Server is running in port 8000');

//Url
var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.write('<h1>This is home Page</h1>');
        res.end();
    }
    if(req.url === '/student'){
        res.writeHead(200,{
            'Content-Type':'text/html'
        })
        res.write(`<h2 style='color:red'>This is student page</h2>`)
        res.end();
    }
    else{
        res.writeHead(200,{
            'Content-Type':'text/html'
        })
        res.write(`<h2>This is normal page</h2>`)
        res.end();
    }
});
server.listen(8000);
console.log('Server is running in port 8000');