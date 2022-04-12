const express = require('express');
const app = express();
const socketio = require('socket.io'); // exposes server

const expressServer = app.listen(9006); // http server
app.use(express.static(__dirname + '/public'));
const io = socketio(expressServer); // invokes the server

let value = 0;

incrementer_Id = incrementer = () => {
    // 0 -> 100 in 10 iterations
    if (value < 100) {
        value += 10
        console.log(value)
        io.to("The Room").emit("progress", {progress: value})
    }
    else {
        clearInterval(incrementer_Id)
    }
}

incrementer_Id = incrementerError = () => {
    // 0 -> 30 in 10 iterations until error event
    if (value < 30) {
        value += 10
        console.log(value)
        io.to("The Other Room").emit("progress", {progress: value})
    }
    else {
        clearInterval(incrementer_Id)
        io.emit("error", {"error": "An error occured"})
    }
}

const updateProgress = () => {
    setInterval(incrementer, 1000) 
}

const updateWithError = () => {
    setInterval(incrementerError, 1000)
}


io.on('connection', (socket) => {
    socket.emit('messageFromServer', {data: 'Welcome to the socketio server'});
    
    socket.on('join', (roomName) => {
        console.log(roomName)
        socket.join(roomName)
        io.to(roomName).emit('messageFromServer', {data:`Joined room: ${roomName}`})
    })
    
    socket.on('editStep', (dataFromClient)=> {
        console.log(dataFromClient);
        updateProgress()
    })

    socket.on('editStepError', () => {
        updateWithError()
    })

    socket.on('disconnectEvent', () => {
        socket.disconnect()
    })

})

