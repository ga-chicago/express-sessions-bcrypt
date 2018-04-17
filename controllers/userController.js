const express = require('express');
const router = express.Router();
const User = require('../models/user.js')

router.get('/', (req, res) => {
	res.send('User controller')	
})

module.exports = router;