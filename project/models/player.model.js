
// Seed db
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
const createPlayer = (body) => {
     
     // push the player to the "fake db"
     players.push(body);
}

/**
 * Returns a JSON representation of a player with the given id from the datasbase
 * @param {Number} id The player id 
 * @returns {Object} The JSON version of the player
 */
const getPlayer = (id) => {
  // Find the id of the player
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

// Delete Function
const deletePlayer = (playerId) => {
  let foundPlayer = getPlayer(playerId);
  // If the player is found
  if (foundPlayer){
    // Delete the player 
    players.splice(players.indexOf(foundPlayer), 1);
  } 
}

// export the functions
module.exports = { getPlayer, getPlayers, editPlayer, deletePlayer, createPlayer};