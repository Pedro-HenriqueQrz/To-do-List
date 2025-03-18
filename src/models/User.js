const connection = require('../database/connection');

class User {
    static async create(userData) {
        return connection('users').insert(userData);
    }

    static async findByEmail(email) {
        return connection('users').where('email', email).first();
    }
}

module.exports = User;