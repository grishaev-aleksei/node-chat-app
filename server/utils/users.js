// [{
//     id:'asfasf',
//     name: 'av asvsa',
//     room: 'dev'
// }]

//addUser(id, name, roomName)
//removeUser(id)
//getUser(id)
//getUserList(room)


class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        const user = {id, name, room};
        this.users.push(user);
        return user
    }

    removeUser(id) {
        const user = this.getUser(id);
        if (user) {
            this.users = this.users.filter(user => user.id !== id)
        }

        return user

    }

    getUser(id) {
        return this.users.filter(user => user.id === id)[0]
    }

    getUserList(room) {
        const users = this.users.filter((user) => user.room === room);
        return users.map((user) => user.name);
    }


}


// class Person {
//     constructor(name, age) {
//         this.age = age;
//         this.name = name;
//         console.log(name, age)
//     }
//
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old`
//     }
// }
//
// const me = new Person('Andrew', 25);
// console.log(me.getUserDescription());

module.exports = {Users};