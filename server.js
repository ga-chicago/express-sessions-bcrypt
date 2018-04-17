const express = require('express');
const app = express();
const PORT = 3000;

//DB
require('./db/db')

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