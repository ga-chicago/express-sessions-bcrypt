const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')
const app = express();
const PORT = 3000;


//DB
require('./db/db')

// MIDDLEWARE
app.use(session({
	secret: 'help my dog keeps shedding', // used to encrypt cookie, make up a phrase, CAREFUL  U DONT GET HACKED
	resave: false, // do not update unless the session object is changed
	saveUninitialized: false // it is illegal to store cookies in a user's browser until they log in
}));
app.use(bodyParser.urlencoded({
	extended: false
}));


// CONTROLLERS
const userController = require('./controllers/userController.js');
app.use('/users', userController);

// THIS WILL BE DELETED
app.get('/', (req, res) => {
	res.render('links.ejs')
})

app.get('*', (req, res) => {
	res.status(404).send("four oh four.! that ain't a page")
})


app.listen(PORT, () => {
	const d = new Date(Date.now())
	console.log(d.toString() + ": server running on port: " + PORT)
})