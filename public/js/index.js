const socket = io();
socket.on('connect', function () {
    console.log('connected to server');

});
socket.on('disconnect', function () {
    console.log('disconnected from server')
});

socket.on('newEmail', function (mail) {
    console.log(mail)
});

socket.on('newMessage', function (message) {
    console.log('new message from server is ', message)
});