const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const io = socketIO(server);
const {generateMessage, generateLocationMessage} = require('./utils/message');
const {isRealString} = require('./utils/validation');

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    
    socket.on('join', function (params, callback) {
        if (!isRealString(params.name) || !isRealString(params.room)) {
            callback('name and room name are required')
        }
        socket.join(params.room);
        socket.emit('newMessage', generateMessage('Admin', `Hello ${params.name}, welcome to ${params.room}`));

        socket.broadcast.to(params.room).emit('newMessage', generateMessage('Admin', `${params.name} has joined`));
        callback()

    });


    console.log('new user connected');
    socket.on('disconnect',()=>{
        console.log('user disconnected')
    });




    socket.on('createMessage', function (message, callback) {

        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();

    });

    socket.on('createLocationMessage', function (coords) {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude))
    })

});


server.listen(port, () => {
    console.log(`listening on port ${port}`)
});


