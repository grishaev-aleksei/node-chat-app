
const joinButton = jQuery('#join-chat');
joinButton.on('click', function (e) {
    const input = jQuery('#room-name');
    const loweredValue = input.val().toLowerCase();
    input.val(loweredValue)
});

