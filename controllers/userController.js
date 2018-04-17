const express = require('express');
const router = express.Router();
const User = require('../models/user.js')

router.get('/', (req, res) => {
	res.send('User controller')	
})

router.get('/logout', (req, res) => {
	req.session.destroy((err) => {
		if(err) {
			console.log("uh oh", err)
		} else {
			res.redirect('/users/register')
		}
	})	
})

router.get('/register', (req, res) => {
	// console.log(req.session, "hey this was logged from within /users/register get route")
	res.render('register.ejs');
})

router.post('/register', (req, res) => {

	// you can add whatever data you want to the session
	req.session.username = req.body.username;
	req.session.loggedIn = true;
	req.session.message = "Thanks for signing up, " + req.body.username;

	console.log(req.session, "hey this was logged from within /users/register post route");

	res.redirect('/home');

})

module.exports = router;