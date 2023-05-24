const User = require('./user');

class UserBase {
    constructor(users) {
        this.users = users;
    }

    count() {
        return this.users.count;
    }

    getNames() {
        return this.users.map((user) => {
            return user.getName();
        });
    }

    getIntroductions() {
        return this.users.map((user) => {
            return user.getIntroduction();
        });
    }
}

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
];

module.exports = { UserBase, users };