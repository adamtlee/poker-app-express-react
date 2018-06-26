var Player = require('../models/player.model');

class PlayerController {
    constructor() {
        // need to initialize somerthing? do it here
        // don't need to? don't worry then.
    }

    list() {
        // TODO return all players
    }

    /**
     * get a player by id
     * @param {Number} id 
     */
    get(id) {
        // get player by id
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

    }
    /**
     * Delete a player
     * @param {Number} playerId the id of the player to delete
     */
    delete(playerId) {

    }
}

module.exports = PlayerController;
