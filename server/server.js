/** @format */

// CONFIG
require('dotenv').config();
const express = require('express'),
    app = express(),
    path = require('path'),
    buildPath = path.join(__dirname, '../build/'),
    port = process.env.PORT,
    logger = require('morgan'),
    cors = require('cors');

// API CONTROLLERS
const { testController } = require('./controllers');

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static(buildPath));
app.use(logger('dev'));
app.use(cors());

// ROUTES & SERVE CLIENT BUILD
app.use('/api', testController);
app.get('*', (_, res) => {
    res.sendFile(buildPath + 'index.html');
});

// START
app.listen(port, () => {
    console.log(`Server is listening on PORT: ${port}`);
    console.log('Server env:', process.env);
});
