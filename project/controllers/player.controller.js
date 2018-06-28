const playerModel = require('../models/player.model');
class PlayerController {
    constructor() {
        // need to initialize somerthing? do it here
        // don't need to? don't worry then.
    }

    list() {
        // return all players
        const players = playerModel.getPlayers();
        return players;
    }

    /**
     * get a player by id
     * @param {Number} id 
     * @returns {Object} The player that was found or null
     */
    get(id) {
        // get player by id

        // check that id is a number
        const player = playerModel.getPlayer(id);

        return player;
    }

    /**
     * Create a player 
     * @param {Object} params the properties to set on the newly created player
     */
    create(body) {
        const player = playerModel.createPlayer(body); 

        playerModel.createPlayer(body);

        return player;
        
    }

    /**
     * 
     * @param {*} playerId the id of the player to edit
     * @param {*} params the properties to update on the player
     */
    edit(playerId, body) {

        const player = playerModel.getPlayer(playerId);

        // player not found
        // return something that identifies this 

        if (player) {
            if (body.firstName) {
                player.firstName = body.firstName
            } if (body.lastName) {
                player.lastName = body.lastName
            } if (body.winning) {
                player.winning = body.winning
            } if (body.country) {
                player.country = body.country
            }
        }

        playerModel.editPlayer(playerId, player)

        return player;

    }

    /**
     * Delete a player
     * @param {Number} playerId the id of the player to delete
     */
    // In Progress
    delete(playerId) {
        
        const player = playerModel.deletePlayer(playerId); 

        playerModel.deletePlayer(playerId)
    
    }
}

module.exports = PlayerController;
