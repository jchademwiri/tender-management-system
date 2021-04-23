const express = require('express');

const router = express.Router();

const {
	login,
	forgotpassword,
	resetpassword,
	register,
} = require('../controllers/auth');

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/forgotpassword').post(forgotpassword);

router.route('/resetpassword/:resetToken').put(resetpassword);

module.exports = router;
