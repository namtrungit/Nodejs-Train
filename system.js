var fs = require('fs');
var http = require('http');

//Read file
// http.createServer(function (req, res) {

//     fs.readFile('demoHtml.html', function (err, data) {
//         res.writeHead(200,
//             { 'Content-Type': 'text/html' }),
//             res.write(data);
//         res.end();
//     })
// }).listen(1810);

//CreateFile: appendfile(), open(), writefile()

//appendfile() 3 tham số(tên, nội dung, hàm callback(err))
// fs.appendFile('trung.txt', 'Hello Trung', function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('success');
// })

//open() 3 tham số(tên, flags{w:viết, r:đọc}, ham callback(err, file))
// fs.open('trung2.txt', 'r', function (err, file) {
//     if (err) {
//         throw err;
//     }
//     console.log('Success')
// })

//Writefile()
fs.writeFile('trung3.txt','Trungpro',function(err){
    if(err){
        console.log(err);
    }
    console.log('Success');
})

//DeleteFile: unlink()
// fs.unlink('trung3.txt',function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('success');
// })

//Rename: rename()
// fs.rename('trung2.txt','trung3.txt',function(err){
//     if(err){
//         console.log(err);
//     }
//     console.log('Success');
// })