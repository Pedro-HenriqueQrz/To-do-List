const knex = require('../database/connection');

class Task {
    static async create(task){
        return await knex('tasks').insert(task);
    }

    static async findByUser(userId){
        return await knex('tasks').where({user_id: userId});
    }

    static async findById(id){
        return await knex('tasks').where({id}).first();
    }

    static async update(id, task){
        return await knex('tasks').where({id}).update(task);
    }

    static async delete(id){
        return await knex('tasks').where({id}).delete();
    }
}

module.exports = Task;