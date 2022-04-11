const express = require('express');
const app = express();
const socketio = require('socket.io'); // exposes server

console.log(__dirname)


const expressServer = app.listen(9005);
app.use(express.static(__dirname + '/public'));
const io = socketio(expressServer); // invokes the server


io.on('connection', (socket)=>{
    socket.emit('messageFromServer', {data: 'Welcome to the socketio server'});
    socket.on('messageToServer', (dataFromClient)=> {
        console.log(dataFromClient);
    })

    socket.on('newMessageToServer', (dataFromClient)=> {
        console.log(dataFromClient)
    })
})