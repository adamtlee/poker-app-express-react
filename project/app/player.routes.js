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
const getPlayerDetail = (req, res)=>{
    // WARNING PSEUDO-ISH CODE AHEAD

    // get the id you need off of the request object --> 'req'
    // expressJS' documentation should help you here
    const id = 5 // this is a placeholder, do it the right way here, hint: "req" dot what?

    const foundPlayerDetail = await playerController.get(id);

    // did you find a player? no? what should be sent back? "four what?" 401,409,??? --> what is the appropriate HTTP status code?
    // TODO return code if not found and proceed no further

    // you found a player object? do you need to manipoulate the object in any way? yes/no?
    // maybe there is a property on the object that you don't want to return to the client
    // or maybe all of your response are of a certain format like { data: foundPlayerDetail}
    // TODO make any data manipulations you ant before sendin the object away

    // TODO return the correct response code and body response
    // example res.status(200).json(foundPlayerDetail)

}

router.get('/:id', getPlayerDetail);

// TODO follow this pattern for the other routes!

/*
router.get('/', player_controller.player_list);
router.post('/', player_controller.player_create);
router.patch('/:id', player_controller.player_edit); 
router.delete('/:id', player_controller.player_delete);
*/
module.exports = router;