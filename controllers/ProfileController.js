var mongo = require('mongoose');
const Users = mongo.model('Users');

exports.getProfile = (req, res) => {
    if (!req.query) { res.status(400).send({ 'error': 'Informações Incompletas!', success: false }) }

    const user = req.query.username

    Users.find({
        username: user
    }, (err, user) => {
        if (user == 0) {
            res.status(404).json({
                error: 'Usuário não encontrado!',
                success: false
            })
            return
        }
        const responseUser = user[0]

        const foundUser = {
            'username': responseUser.username,
            'name': responseUser.name,
            'surname': responseUser.surname,
            'profilepic': responseUser.profilepic, 
            'profilecover': responseUser.profilecover,
            'collage': responseUser.collage,
            'bio': responseUser.bio,
            'followers': responseUser.followers,
            'momentos': responseUser.momentos,
        }


        res.status(200).send({ user: foundUser })
        return
    });
}