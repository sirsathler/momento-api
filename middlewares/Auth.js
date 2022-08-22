const jwt = require("jsonwebtoken");
const secret = process.env.SECRET

exports.authenticateUser = (req, res, next) => {
    const jwtToken = req.headers["authorization"];
    if (!jwtToken) { res.status(403).send({ error: 'Você não tem autorização para acessar essa página!' }); return; }

    try {
        const decoded = jwt.verify(jwtToken, secret)
        res.locals.user = decoded.user;
        next();
    }
    catch (err) {
        res.status(403).send({ error: 'Você não tem autorização para acessar essa página!' });
        return;
    }
}