var AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey',
  region: "eu-west-2",
  endpoint: "http://localhost:8000"
});
var dynamodb = new AWS.DynamoDB();

var docClient = new AWS.DynamoDB.DocumentClient();

/* 
  This function returns all players from the array players
*/
 const getPlayers = async () => {
  const params = {
    TableName: "Players"
  }
  const players = await docClient.scan(params).promise();
  return players && players.Items ? players.Items :null;
}

// Create a New Player
const createPlayer = async (body) => {
  var params = { 
    TableName: 'Players', 
    Item: { 
      id: body.id,
      firstName: body.firstName, 
      lastName: body.lastName, 
      winning: body.winning, 
      country: body.country     
    }
  }

  await docClient.put(params).promise();
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
  return player && player.Item ? player.Item : null;
}

// Edit player method
const editPlayer = async (playerId, player) => {
  const params = {
    TableName: "Players", 
    Key: {
      'id' : playerId
    },
    UpdateExpression: 'set #firstName = :f, #lastName = :l, #winning = :w, #country = :c',
    ExpressionAttributeNames: {
      '#firstName' : 'firstName',
      '#lastName' : 'lastName',
      '#winning' : 'winning',
      '#country' : 'country'
    }, 
    ExpressionAttributeValues:{
      ':f': player.firstName, 
      ':l': player.lastName, 
      ':w': player.winning, 
      ':c': player.country     
    }, 
    ReturnValues: 'UPDATED_NEW'
  }

 const foundPlayer = await docClient.update(params).promise(); 
 
 return foundPlayer;
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
}

// export the functions
module.exports = { getPlayer, getPlayers, editPlayer, deletePlayer, createPlayer };