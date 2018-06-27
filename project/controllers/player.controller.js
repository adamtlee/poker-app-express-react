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
    create(params) {

    }

    /**
     * 
     * @param {*} playerId the id of the player to edit
     * @param {*} params the properties to update on the player
     */
    edit(playerId, params) {

        const player = playerModel.editPlayer(playerId); 

        return player;

    }

    /**
     * Delete a player
     * @param {Number} playerId the id of the player to delete
     */
    delete(playerId) {

    }
}

module.exports = PlayerController;
