const {assert} = require('chai');

const {Users} = require('./users');


describe('Users', () => {

    let users;

    beforeEach('', () => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'Mike',
            room: 'node course'
        }, {
            id: 2,
            name: 'Jen',
            room: 'react course'
        }, {
            id: 3,
            name: 'Julie',
            room: 'node course'
        }]
    });

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

    it('should return names for node course', function () {

        const userList = users.getUserList('node course');

        assert.deepEqual(userList, ['Mike', 'Julie'])
    });

    it('should return names for react course', function () {

        const userList = users.getUserList('react course');

        assert.deepEqual(userList, ['Jen'])
    });

    it('should remove a user', function () {
        const user = users.removeUser(1);

        assert.equal(user.id, 1);
        assert.notInclude(users.users, user);
    });

    it('should not remove a user', function () {
        const user = users.removeUser(5);

        assert.isUndefined(user);
        assert.equal(users.users.length, 3)
    });

    it('should find user', function () {
        const user = users.getUser(1);
        assert.deepEqual(user, users.users[0]);
    });

    it('should not find user', function () {
        const user = users.getUser(5);
        assert.isUndefined(user)
    });
});