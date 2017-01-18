var fs = require('fs');


console.log('Starting...')

/*
var content = fs.readFileSync('./public/node.txt');
*/

fs.readFile('./public/node.txt', function(err, content){
    console.log('Contents ' + content)
})

console.log('Finished...')