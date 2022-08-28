const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController.js');
const AuthController = require('../middlewares/Auth.js')

router.get('/post', PostController.getPosts);
router.post('/post', AuthController.authenticateUser, PostController.uploadPost);

module.exports = router;