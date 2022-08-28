const jwtToken = require('jsonwebtoken')
var mongo = require('mongoose');
const PostsSchema = require("../models/PostSchema");

const Posts = mongo.model('Posts')

exports.getPosts = (req, res) => {
    if (!req.query.username) { res.status(400).send({ 'error': 'Informações Incompletas!', success: false }) }
    const decode =  jwtToken.decode( req.get('Authorization'))
    const user = decode.user[0]

    Posts.find({
        ownerId: user._id,
    }, (err, postList) => {
        if (postList == 0) {
            res.status(404).json({
                error: 'Nenhum post encontrado!',
                success: false
            })
            return
        }
        res.status(200).send({ posts: postList })
    });

}

exports.uploadPost = (req, res) => {
    
}