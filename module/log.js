
var log = {
    info: function(info){
        console.log('Info '+ info);
    },
    error: function(error){
        console.log('Error '+ error);
    },
    success: function(success){
        console.log('Success '+ success);
    }
}
module.exports = log;

//Or
// module.exports = {
//     info: function(info){
//         console.log('Info '+ info);
//     },
//     error: function(error){
//         console.log('Error '+ error);
//     },
//     success: function(success){
//         console.log('Success '+ success);
//     }
// }

