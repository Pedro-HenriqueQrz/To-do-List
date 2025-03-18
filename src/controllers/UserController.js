const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

class UserController {
    static renderLoginPage(req, res) {
        res.render('users/login', { error: null, token: null }); 
    }

    static renderRegisterPage(req, res) {
        res.render('users/register', { error: null, token: null }); 
    }

    static async login(req, res) {
        const { email, password } = req.body;
        const user = await User.findByEmail(email);

        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            req.session.token = token;
            res.redirect('/tasks');
        } else {
            res.render('users/login', { error: 'Email ou senha incorretos!', token: null });
        }
    }

    static async register(req, res) {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });
        res.redirect('/users/login');
    }

    static logout(req, res) {
        req.session.destroy();
        res.redirect('/users/login');
    }
}

module.exports = UserController;