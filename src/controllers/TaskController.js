const Task = require('../models/Task');

class TaskController {
    static async renderTaskPage(req, res) {
        const userId = req.userId;
        const tasks = await Task.findByUser(userId);
        const token = req.session.token;
        res.render("tasks/index", { tasks, token });
    }

    static async create(req, res){
        const { title, description } = req.body;
        const userId = req.userId;

        await Task.create({title, description, user_id: userId});
        res.redirect('/tasks');
    }

    static async list(req,res) {
        const userId = req.userId;
        const tasks = await Task.findByUser(userId);
        res.json(tasks);
    }

    static async update(req, res){
        const { id } = req.params;
        const { title, description, completed } = req.body;

        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({message: 'Tarefa não encontrada!'});
        }

        await Task.update(id, {title, description, completed});
        res.json({message: 'Tarefa atualizada com sucesso!'});
    }

    static async updateStatus(req, res) {
        const { id } = req.params;
        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({ message: 'Tarefa não encontrada!' });
        }

        await Task.update(id, { completed: !task.completed });
        res.json({ message: 'Status da tarefa atualizado com sucesso!' });
    }

    static async delete(req, res){
        const { id } = req.params;

        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({message: 'Tarefa não encontrada!'});
        }

        await Task.delete(id);
        res.json({ message: 'Tarefa excluída com sucesso!' });
    }
}

module.exports = TaskController;