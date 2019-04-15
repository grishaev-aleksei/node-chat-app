const {assert} = require('chai');

const {Users} = require('./users');


describe('Users', () => {

    it('should add new user', function () {

        const users = new Users();
        const user = {
            id: '123',
            name: 'Andrew',
            room: 'dev'
        };

        const responseUser = users.addUser(user.id, user.name, user.room);

        assert.deepEqual(users.users, [user])
    });
});