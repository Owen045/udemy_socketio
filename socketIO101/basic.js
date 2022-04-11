// we need http because we're not using Express
const http = require('http');
// 3rd party library




const server = http.createServer((req, res)=>{
    res.end("I am connected")
});

const io = require('socket.io')(server, {
    cors: {
        origin: "*"
      }
});
// socketio server wraps http server

io.on('connection', (socket, req)=>{
    // ws.send becomes socket.emit
    socket.emit('welcome', "Welcome, websocket connected");
    socket.on('message', (msg) => {
        console.log(msg.data);
    })
})

server.listen(8000);