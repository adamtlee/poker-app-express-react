// Requirements
const express = require('express');
const router = express.Router();

const PlayerController = require('../controllers/player.controller');
const playerController = new PlayerController();


/* This is your route code. it sould make use of your controller to retrieve the data you want
* It should also handle sending back HTTP responses
*
* Your controller should not have knowledge of the 'req' and 'res' objects.
* Why? Ask yourself shouldn't the controller be able to be used by another part of the 
*      code that doesn't have the 'req' and 'res' objects?
*      Might you need to retrieve a player for another purpose? Perhaps checking a property or checking that it exists. 
*      Maybe you do this at some point but don't immediately send an HTTP response?
*/

// const createPlayer = (req, res) => {

// }

// Create a Player
// in progress
const createPlayer = (req, res) => {
    var body = req.body;
    const createPlayer = playerController.create(body);
    if (createPlayer) {
        return res.status(201).json(createPlayer);
    } else {
        return res.status(400).json({
            message: 'Invalid data for request'
        });
    }
}

// Get the index of players
const getPlayers = async (req, res) => {
    const getPlayers = await playerController.list();

    if (getPlayers) {
        return res.status(200).json(getPlayers);
    } else {
        return res.status(200).json([]);
    }
}

// Get the details of a single player 
const getPlayerDetail = (req, res) => {
    let id = req.params.id;
    id = Number.parseInt(id);

    const foundPlayerDetail = playerController.get(id);

    if (foundPlayerDetail) {
        return res.status(200).json(foundPlayerDetail);
    } else {
        return res.sendStatus(404)
    }
}

// Edit the Details of a player 
const editPlayerDetails = (req, res) => {
    let id = req.params.id;
    id = Number.parseInt(id);
    let body = req.body

    const playerResp = playerController.edit(id, body);

    // did playerResponse fail get player if so respond with 
    if (playerResp === false) {
        return res.status(404).send({
            message: "content can't be empty"
        });
    }
    res.status(200).json(playerResp);
}

// Delete a player (In Progress)
const deletePlayer = (req, res) => {

    let id = req.params.id;
    id = Number.parseInt(id);

    playerController.delete(id);

    res.sendStatus(204);

}



router.post('/', createPlayer)
router.get('/', getPlayers)
router.get('/:id', getPlayerDetail);
router.patch('/:id', editPlayerDetails);
router.delete('/:id', deletePlayer);



// TODO follow this pattern for the other routes!

/*
router.post('/', player_controller.player_create);
router.patch('/:id', player_controller.player_edit); 
router.delete('/:id', player_controller.player_delete);
*/
module.exports = router;