const playerModel = require('../models/player.model');

// Define Validation for player
const Joi = require('joi');

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
        return Joi.validate(body, schema, (err, value) => {
            // assign a random int ID to the plaeyr
            const id = Math.ceil(Math.random() * 9999999);

            if (err) {
                // If anything goes wrong send status 400 
                return false;
            } else {
                // Bind the randomly generated Id to the player
                body = Object.assign({ id }, value)

                playerModel.createPlayer(body);
                return body;
            }
        });

    }

    /**
     * 
     * @param {*} playerId the id of the player to edit
     * @param {*} params the properties to update on the player
     */
    edit(playerId, body) {

        const player = playerModel.getPlayer(playerId);


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
        } else {

            // player not found
            // return something that identifies this 
            return false
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

        playerModel.deletePlayer(playerId);


    }
}

module.exports = PlayerController;
