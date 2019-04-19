const socket = io();

socket.on('connect', function () {

    socket.emit('getRoomList',{}, function (rooms) {
        if (rooms && rooms.length > 0) {

            const select = jQuery('<select></select>');
            select.append(jQuery('<option></option>').text('select room'));
            rooms.forEach(function (room) {

                select.append(jQuery('<option></option>').text(room))
            });

            jQuery('#drop-down').html(select);

        }

    });



});


const joinButton = jQuery('#join-chat');
joinButton.on('click', function (e) {
    const userName = jQuery('#user-name');
    const roomName = jQuery('#room-name');
    const roomNameToLowerCase = roomName.val().toLowerCase();
    roomName.val(roomNameToLowerCase);

    const currentOption = jQuery('select')[0].selectedOptions[0].text;
    if (!roomName.val() && currentOption !== 'select room') {
        roomName.val(currentOption)
    }

    socket.emit('getUsersList', {room: roomNameToLowerCase}, function (users) {
        if (users && users.length > 0) {
            users.forEach(user => {
                if (user === userName.val()) {
                    alert('this name is already in use');
                    return window.location.href = '/';
                }
            })
        }
    })
});

