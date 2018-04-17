const express = require('express');
const app = express();
const PORT = 3000;


app.listen(PORT, () => {
	const d = new Date(Date.now())
	console.log(d.toString() + ": server running on port: " + PORT)
})