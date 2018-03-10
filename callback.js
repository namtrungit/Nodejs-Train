var fs = require('fs');

//Xử lý đồng bộ
// var data = fs.readFileSync('trung3.txt');
// console.log(data.toString());

//Xử lý bất đồng bộ
fs.readFile('trung3.txt', function (err,data) {
    if (err)
        console.log(err);
    console.log(data.toString());
})
console.log('Program Ended');