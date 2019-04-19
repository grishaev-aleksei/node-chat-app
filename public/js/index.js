const socket = io();


const joinButton = jQuery('#join-chat');
joinButton.on('click', function (e) {
    const userName = jQuery('#user-name');
    const roomName = jQuery('#room-name');
    const roomNameToLowerCase = roomName.val().toLowerCase();
    roomName.val(roomNameToLowerCase);

    socket.emit('getUsersList', {room: roomNameToLowerCase}, function (users) {
        if (users.length > 0) {
            users.forEach(user => {
                if (user === userName.val()) {
                    alert('this name is already in use');
                    return window.location.href = '/';
                }
            })
        } else {
            console.log('no users')
        }

        // if (users.size > 0) {
        //     users.forEach(name => {
        //         if (name === userName) {
        //             e.preventDefault();
        //             alert('name already in use')
        //         }
        //     })
        // }
    })
});

