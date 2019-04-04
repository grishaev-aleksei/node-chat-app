const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const io = socketIO(server);

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');
    socket.on('disconnect',()=>{
        console.log('user disconnected')
    });
    socket.emit('newEmail', {
        from: 'mike@example.com',
        text: 'hex, what is going on?',
        createAt: 123
    });

    socket.emit('newMessage',{
        from: 'your mind',
        text: 'do not listen to me',
        createdAt: new Date().toDateString()
    });

    socket.on('createEmail', function (newEmail) {
       console.log('create email', newEmail)
    });

    socket.on('createMessage', function (message) {
       console.log('message from frontend', message)
    })
});


// app.get('/', (req, res) => {
//     res.sendFile('index.html')
// });

server.listen(port, () => {
    console.log(`listening on port ${port}`)
});


