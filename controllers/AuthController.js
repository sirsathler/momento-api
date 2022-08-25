const { json } = require('body-parser');
var mongo = require('mongoose');
const jwt = require('../middlewares/JWT');
const userSchema = require("../models/UserSchema");

const Users = mongo.model('Users');

// let users = require('../models/UserSchema')

exports.login = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({
            error: 'Informações Incompletas',
            success: false
        })
        return;
    }

    const userUsername = req.body.username
    const userPassword = req.body.password

    Users.find({
        username: userUsername,
        password: userPassword
    }, (err, user) => {
        if (user == 0) {
            res.status(401).json({
                error: 'Login ou senha incorretos!',
                success: false
            })
            return
        }
        res.status(200).send({ user: user[0], token: jwt.jwtTokenGenerator(user) })
    });
};

exports.register = (req, res, next) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({
            error: 'Informações Incompletas',
            success: false
        })
        return;
    }

    const userUsername = req.body.username
    const userPassword = req.body.password

    if (!checkIfUsernameExists(userUsername)) {
        res.status(401).send({
            error: 'Usuário já cadastrado!',
            success: false
        })
        return;
    }

    var newUser = new Users({
        'username': userUsername,
        'password': userPassword,
        'name': 'Momento',
        'surname': 'User',
    });
    newUser.save((err, user) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.status(200).json({user, success:true});
        return;
    });
}

function checkIfUsernameExists(username) {
    Users.find({
        username: username
    }, (err, user) => {
        if (user == '') {
            return false;
        }
    })
    return true
}
