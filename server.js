'use strict';
// Node modules
const bodyParser = require('body-parser'),
  express = require('express');

const app = express();
const port = (process.env.PORT || 3000);

// Add body parsing for Content-Type json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let playerRoute = require('./app/models/player.model');

let playerRoute2 = require('./app/models/player.model');

app.use('/player', playerRoute);

app.listen(port, () => {
  console.log('player app runnung')
});