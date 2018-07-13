// Node modules
const bodyParser = require('body-parser'),
  express = require('express'),
  { routes } = require('./project/constants/constants');

 const { createTable } = require("./setup/db");

const app = express();
// Run the server on port on 3000
const port = (process.env.PORT || 5000);

// Add body parsing for Content-Type json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const playerRoute = require('./project/app/player.routes');

// Player routes
app.use(`/${routes.player}`, playerRoute);

if (process.env.NODE_ENV === 'development') {
  createTable().then(() => {
    // Listen on port 3000
    app.listen(port, () => {
      console.log(`player app running on ${port}`)
    });
  })
} else {
  app.listen(port, () => {
    console.log(`player app running on ${port}`)
  });
}

// Export
module.exports = app;