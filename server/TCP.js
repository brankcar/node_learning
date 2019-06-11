var net = require('net');

var server = net.createServer(function(socket){
    socket.on('data', function(data) {
        socket.write("Hello World!");
    });

    socket.on('end', function() {
        console.log('连接断开');
    });

    socket.write("<h1>欢迎光临《深入浅出Node.js》示例：</h1>");
});

server.listen(8124, function() {
    console.log('server start');
});


// -------------------------------------

var client = net.connect({port: 4000}, function() {
    console.log('client connected');
    client.write('world!\r\n');
});

client.on('data', function(data){
    console.log(data.toString());
    client.end();
});

client.on('end', function(){
    console.log('client disconnected');
});

