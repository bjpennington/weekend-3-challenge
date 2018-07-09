// require in express, mongo, and body-parser
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// set up app, port and mongo url
const app = express();
const PORT = process.env.PORT || 5000;
const databaseUrl = 'mongodb://localhost:27017/todolist';

// establish connection to mongo database
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`Mongoose connection error: ${error}`);
});

// require in /to-dos router
const toDoRouter = require('./routes/todos.router');

// set up body-parser
app.use(bodyParser.json());

// serve up static files
app.use(express.static('server/public'));

// set up router path
app.use('/to-dos', toDoRouter);

// set app to listen on port
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`); 
});