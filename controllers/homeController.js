const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	// user will have logged in when they see this, so their u/n will be stored in the session already
	// so we can send it to the template
	// remember the session object is available **EVERYWHERE** in the controllers
	console.log(req.session)
	res.render('home.ejs', {
		username: req.session.username
	})
})

module.exports = router;