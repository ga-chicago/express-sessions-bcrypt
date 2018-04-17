const express = require('express');
const router = express.Router();
const User = require('../models/user.js')
const bcrypt = require('bcrypt')

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

	// capture password 
	const password = req.body.password;

	// 1st param = the pwd you're encrypting
	// 2nd param is the algorithm we encrypt with (& salt)
	const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

	// this is the obj we will store in our db
	const userDbEntry = {
		username: req.body.username,
		password: passwordHash
	}

	User.create(userDbEntry, (err, createdUser) => {
		console.log(createdUser, " ^^^ this is the user that got created--------------------------------------")

		// you can add whatever data you want to the session
		req.session.username = createdUser.username
		req.session.loggedIn = true;
		req.session.message = "Thanks for signing up, " + req.body.username;

		res.redirect('/home');

	})

 
})

module.exports = router;