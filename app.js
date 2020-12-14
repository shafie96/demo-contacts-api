const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
require('dotenv/config');

app.use(bodyParser.json());

//Middlewares
//Import Routes
const peopleRoute = require('./routes/people');
app.use('/people', peopleRoute);
const contactRoute = require('./routes/contacts');
app.use('/contacts', contactRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on Api Demo Contact Created by Shafie');
});

//Connect to DB
mongoose.connect(
    'mongodb+srv://Admin:P@ssw0rd@cluster0.uav04.mongodb.net/ApiDemo?retryWrites=true&w=majority', //should be process.env.DB_CONNECTION
    { useNewUrlParser: true, useUnifiedTopology: true },
    () =>console.log('Connected to DB!')
);

//Listen to local server
app.listen(port);