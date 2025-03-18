const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const token = req.session.token;

    if (!token) return res.status(401).json({ error: "Acesso negado!" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido!" });
    }
}

module.exports = authMiddleware;