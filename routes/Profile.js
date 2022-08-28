const express = require('express');
const router = express.Router();

const ProfileController = require('../controllers/ProfileController.js');
const { authenticateUser } = require('../middlewares/Auth.js');

router.get('/profile', authenticateUser, ProfileController.getProfile);

module.exports = router;