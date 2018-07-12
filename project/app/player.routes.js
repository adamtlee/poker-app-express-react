// Requirements
const express = require('express');
const router = express.Router();

const PlayerController = require('../controllers/player.controller');
const playerController = new PlayerController();

// Create a Player
const createPlayer = async (req, res) => {

    var body = req.body;
    const createPlayer = await playerController.create(body);
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
const getPlayerDetail = async (req, res) => {

    let id = req.params.id;
    id = Number.parseInt(id);

    const foundPlayerDetail = await playerController.get(id);

    if (foundPlayerDetail) {
        return res.status(200).json(foundPlayerDetail);
    } else {
        return res.sendStatus(404)
    }
}

// Edit the Details of a player 
const editPlayerDetails = async (req, res) => {
    let id = req.params.id;
    id = Number.parseInt(id);
    let body = req.body

    const playerResp = await playerController.edit(id, body);

    // did playerResponse fail get player if so respond with 
    if (playerResp === false) {
        return res.status(404).send({
            message: "content can't be empty"
        });
    }
    res.status(200).json(playerResp);
}

// Delete a player (In Progress)
const deletePlayer = async (req, res) => {
    let id = req.params.id;
    id = Number.parseInt(id);

    const wasDeleted = await playerController.delete(id);
    if (wasDeleted) {
        return res.sendStatus(204);
    } else {
        return res.sendStatus(404);
    }
}



router.post('/', createPlayer)
router.get('/', getPlayers)
router.get('/:id', getPlayerDetail);
router.patch('/:id', editPlayerDetails);
router.delete('/:id', deletePlayer);

module.exports = router;