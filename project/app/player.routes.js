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


const getPlayers = (req, res) => {
    const getPlayers = playerController.list(); 

    if(getPlayers) {
        return res.status(200).json(getPlayers); 
    } else {
        return res.status(200).json([]); 
    }
}

const getPlayerDetail = (req, res) => {
    let id = req.params.id;
    id = Number.parseInt(id);

    const foundPlayerDetail = playerController.get(id);

    if (foundPlayerDetail) {
        console.log(foundPlayerDetail);
        return res.status(200).json(foundPlayerDetail);
    } else {
        return res.sendStatus(404)
    }
}

const editPlayerDetails = (req, res) => { 
    let id = req.params.id; 
    id = Number.parseInt(id); 

    const editPlayerDetails = playerController.edit(id); 

    if(editPlayerDetails) {
        if (req.body.firstName){
            editPlayerDetails.firstName = req.body.firstName
        } if (req.body.lastName) {
            editPlayerDetails.lastName = req.body.lastName
        } if (req.body.winning) {
            editPlayerDetails.winning = req.body.winning
        } if (req.body.country) {
            editPlayerDetails.country = req.body.country   
        }
        res.status(200).json(editPlayerDetails);
    } else {
        return res.status(404).send({
            message: "content can't be empty"
        });
    }
}


router.get('/', getPlayers)
router.get('/:id', getPlayerDetail);
router.patch('/:id', editPlayerDetails);

// TODO follow this pattern for the other routes!

/*
router.post('/', player_controller.player_create);
router.patch('/:id', player_controller.player_edit); 
router.delete('/:id', player_controller.player_delete);
*/
module.exports = router;