
// Seed
const players = [
  { id: 1, firstName: 'Anthony', lastName: 'Romo', winning: '324', country: 'Brazil' },
  { id: 2, firstName: 'Vanessa', lastName: 'bach', winning: '563', country: 'Bolivia' },
  { id: 3, firstName: 'Tom', lastName: 'Herf', winning: '200', country: 'France' }
]

/* 
  This function returns all players from the array players
*/
const getPlayers = () => {
  return players;
}

// Create a New Player
const createPlayer = (req, res) => {
  // Define Validation for player
  const Joi = require('joi');

  // request the fields of the player 
  let data = req.body;

  const schema = Joi.object().keys({
    // Id cannot be modified
    id: Joi.forbidden(),
    // require that these fields can't be blank
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    winning: Joi.number().required(),
    country: Joi.string().required(),
  });

  // Validate request data agianst schema
  Joi.validate(data, schema, (err, value) => {
    // assign a random int ID to the plaeyr
    const id = Math.ceil(Math.random() * 9999999);

    if (err) {
      // If anything goes wrong send status 400 
      res.status(400).json({
        // prompt the user with a message 
        message: 'Invalid data for request',
      });
    } else {
      // Bind the randomly generated Id to the player
      data = Object.assign({ id }, value)
      // push the player to the "fake db"
      players.push(data) 
    }
  });
}

/**
 * Returns a JSON representation of a player with the given id from the datasbase
 * @param {Number} id The player id 
 * @returns {Object} The JSON version of the player
 */
const getPlayer = (id) => {
  // find the id of the player
  const foundPlayer = players.find((
    player => {
      // Check to see if it is equal to the id we are looking for
      return player.id === id;
    }
  ))
  // return that found player 
  return foundPlayer;
}

// Edit player method
const editPlayer = (playerId, player) => {

  let foundPlayer = players.find((
    player => {
      return player.id === playerId
    }
  ))
  foundPlayer = player; 
}

//   if (foundPlayer) {
//     if (req.body.firstName) {
//       foundPlayer.firstName = req.body.firstName
//     } if (req.body.lastName) {
//       foundPlayer.lastName = req.body.lastName
//     } if (req.body.winning) {
//       foundPlayer.winning = req.body.winning
//     } if (req.body.country) {
//       foundPlayer.country = req.body.country
//     }
//     res.json(foundPlayer);
//   } else {
//     return res.status(404).send({
//       message: "content cannot be empty"
//     });
//   }
// }

// delete function attempt 2
const deletePlayer = (playerId, player) => {
  let foundPlayer = players.find((
    player => {
      return player.id === playerId;
    }
  ))
  if (foundPlayer){
    players.splice(players.indexOf(foundPlayer), 1);
  } 
  return foundplayer;
}
//}

module.exports = { getPlayer, getPlayers, editPlayer, deletePlayer, createPlayer};