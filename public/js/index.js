const socket = io();
socket.on('connect', function () {
    console.log('connected to server');

});
socket.on('disconnect', function () {
    console.log('disconnected from server')
});

socket.on('helloNew', function (mes) {
    console.log(mes)
});
socket.on('newOneJoinedAlert', function (mes) {
    console.log(mes)
});

socket.on('newMessage', function (message) {
    console.log('new message from server is ', message)
});

socket.emit('createMessage', {
    from: 'Frank',
    text: 'Hi'
}, (res) => {
    console.log('got it', res)
});