// Node modules
const bodyParser = require('body-parser'),
      express = require('express');


const app = express();
// Run the server on port on 3000
const port = (process.env.PORT || 3000);

// Add body parsing for Content-Type json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const playerRoute = require('./project/app/player.routes');

// Player routes
app.use('/player', playerRoute);

// Listen on port 3000
app.listen(port, () => {
  console.log('player app running')
});

// Export
module.exports = app;