const express = require('express');
const TaskController = require('../controllers/TaskController');
const authMiddleware = require('../middlewares/authMiddleware');

const routes = express.Router();

routes.post('/', authMiddleware, TaskController.create);
routes.get('/', authMiddleware, TaskController.renderTaskPage);
routes.put('/:id', authMiddleware, TaskController.update);
routes.put('/:id/status', authMiddleware, TaskController.updateStatus);
routes.delete('/:id', authMiddleware, TaskController.delete);

module.exports = routes;