const mongoose = require('mongoose');


const connectionString = 'mongodb://localhost:27017/express-sessions';


mongoose.connect(connectionString);


mongoose.connection.on('connected', () => {
  console.log('mongoose connected to db');
});

mongoose.connection.on('error', (err) => {
  console.log('mongoose error: ', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('mongoose disconnected');
});