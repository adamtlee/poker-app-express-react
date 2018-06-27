'use strict';
// Node modules
const bodyParser = require('body-parser'),
    express = require('express');

const ExpressJoi = require('express-joi-validator');
const Joi = require('joi');
const app = express();
const port = (process.env.PORT || 3000);

// Add body parsing for Content-Type json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log('player app running')
});

module.exports = app;