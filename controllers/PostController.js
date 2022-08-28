const jwtToken = require('jsonwebtoken')
var mongo = require('mongoose');
const PostsSchema = require("../models/PostSchema");

const Posts = mongo.model('Posts')

exports.getPosts = (req, res) => {
    if (!req.get('Authorization')) { res.status(403).send({ 'error': 'Você não tem autorização!', success: false }) }
    const decode = jwtToken.decode(req.get('Authorization'))
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
    if (!req.body.post) { res.status(400).send({ 'error': 'Informações Incompletas!', success: false }) }

    try {
        const bodyPost = req.body.post
        const post = {
            'ownerId': bodyPost.ownerId ?? 'Anônimo',
            'postImgURL': bodyPost.postImgURL,
            'postDate': Date(),
            'description': bodyPost.description ?? ''
        }
        const newPost = new Posts(post)
        newPost.save((err, post) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json({ post, success: true });
            return;
        });
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ 'error': 'Informações Incompletas!', success: false })
    }
}