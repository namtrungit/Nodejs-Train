//VD1

// var event = require('events');
// var ev = new event.EventEmitter();
// ev.on('FirstEvent', function(data){
//     console.log(data);
// })
// ev.emit('FirstEvent','This is my first Event Sample');

//VD2
var emiter = require('events').EventEmitter;

function LoopProcessor(num) {
    var e = new emiter;
    setTimeout(function () {
        for (var i = 0; i < num; i++) {
            e.emit('BeforeProgess', i);
            console.log('Processing Number: ' + i)
            e.emit('AfterProgess',i);
        }
    }, 1000);
    return e;
}
var lp = LoopProcessor(3);
lp.on('BeforeProgess', function(data){
    console.log('About to start the progess for '+ data);
})

lp.on('AfterProgess', function(data){
    console.log('Complete '+ data);
})

