var AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey',
  region: "eu-west-2",
  endpoint: "http://localhost:8000"
});
var dynamodb = new AWS.DynamoDB();

var docClient = new AWS.DynamoDB.DocumentClient();
// Seed db
const players = [
  { id: 1, firstName: 'Anthony', lastName: 'Romo', winning: '324', country: 'Brazil' },
  { id: 2, firstName: 'Vanessa', lastName: 'bach', winning: '563', country: 'Bolivia' },
  { id: 3, firstName: 'Tom', lastName: 'Herf', winning: '200', country: 'France' }
]

/* 
  This function returns all players from the array players
*/
 const getPlayers = async () => {
  const params = {
    TableName: "Players"
  }
  const players = await dynamodb.scan(params).promise();
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
const getPlayer = async (id) => {
  // Find the id of the player
  const params = {
    TableName: "Players", 
    Key: {
      "id": id
    }
  }
  const player = await docClient.get(params).promise(); 
  // return that found player 
  return player;
}

// Edit player method
const editPlayer = async (playerId, player) => {
  const params = {
    TableName: "Players", 
    Key: {
      "id": id
    }
  }

  // let foundPlayer = players.find((
  //   player => {
  //     return player.id === playerId
  //   }
  // ))
  // foundPlayer = player;
}

// Delete Function
const deletePlayer = async (playerId) => {
  const params = {
    TableName: "Players", 
    Key: {
      "id": playerId
    }
  }

   await docClient.delete(params).promise(); 
  // let foundPlayer = getPlayer(playerId);
  // // If the player is found
  // if (foundPlayer) {
  //   // Delete the player 
  //   players.splice(players.indexOf(foundPlayer), 1);
  // }
}

// export the functions
module.exports = { getPlayer, getPlayers, editPlayer, deletePlayer, createPlayer };