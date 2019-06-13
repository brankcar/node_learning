var WebSocket = require('ws');

var socket = new WebSocket('ws://127.0.0.1:8088/updates');
socket.onopen = function(){
    setInterval(function() {
        if (socket.bufferedAmount == 0) {
            socket.sent(getUpDateData());
        }
    }, 50);
};

socket.onmessage = function(event) {
    console.log(event.data)
};