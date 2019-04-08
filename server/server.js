const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const io = socketIO(server);
const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');
    socket.on('disconnect',()=>{
        console.log('user disconnected')
    });

    socket.emit('helloNew', generateMessage('Admin', 'welcome to the chat app'));

    socket.broadcast.emit('newOneJoinedAlert', generateMessage('Admin', 'New user joined'));


    socket.on('createMessage', function (message, callback) {
       console.log('message from frontend', message);

        socket.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');

    })
});


server.listen(port, () => {
    console.log(`listening on port ${port}`)
});


