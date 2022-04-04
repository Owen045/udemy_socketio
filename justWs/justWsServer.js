const http = require('http');

// 3rd party module, ws
const websocket = require('ws');

const server = http.createServer((req, res)=>{
    res.end("I am connected")
});

const wss = new websocket.Server({server})
wss.on('headers', (headers, req)=>{
    console.log(headers) // 101 switching protocols status code
})
wss.on('connection', (ws, req)=>{
    console.log(ws);
    ws.send("Welcome, websocket connected");
    ws.on('message', (msg) => {
        console.log(msg.toString());
    })
})


server.listen(8000)