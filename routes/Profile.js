const express = require('express');
const router = express.Router();

const ProfileController = require('../controllers/ProfileController.js');

router.get('/profile', ProfileController.getProfile);

module.exports = router;