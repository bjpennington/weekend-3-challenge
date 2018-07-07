const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const databaseUrl = 'mongodb://localhost:27017/todolist';

mongoose.connect(databaseUrl);

mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${databaseUrl}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`Mongoose connection error: ${error}`);
});

app.use(bodyParser.json());


app.use(express.static('server/public'));
app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`); 
});