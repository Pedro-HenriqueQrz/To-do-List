const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/login', UserController.renderLoginPage);
router.post('/login', UserController.login);
router.get('/register', UserController.renderRegisterPage);
router.post('/register', UserController.register);
router.get('/logout', UserController.logout);

module.exports = router;