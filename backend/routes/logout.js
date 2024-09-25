const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

//logout
router.post('/',loginController.logoutUser);

module.exports = router;