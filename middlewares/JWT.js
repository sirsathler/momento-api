const jwt = require("jsonwebtoken");


exports.jwtTokenGenerator = (user) => {
    const token = jwt.sign({ user }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
    });
    return token;
}

exports.jwtTokenAuthenticator = (token) => {
    const jwtToken = req.headers["authorization"];

    jwt.verify(jwtToken, SECRET_KEY, (err) => {
        if (err) { res.status(403).send({error : 'Você não tem autorização para acessar essa página!'}); return;};
        next();
    });
}