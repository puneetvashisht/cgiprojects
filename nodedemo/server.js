var http = require('http');


var server = http.createServer(function(req,res){
    console.log('Recieved req for: ' + req.url)
    res.end('Some text');
})

server.listen(8080);