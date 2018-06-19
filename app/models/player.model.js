
const router = require('express').Router();
const players = [
  { id: 1, firstName: 'Anthony', lastName: 'Romo', winning: '324', country: 'Brazil' },
  { id: 2, firstName: 'Vanessa', lastName: 'bach', winning: '563', country: 'Bolivia' },
  { id: 3, firstName: 'Tom', lastName: 'Herf', winning: '200', country: 'France' }
]


const getPlayers = (req, res) => {
  // some mongo call to get all players
  // const player = playerModel.getPlayerById(id)

  console.log(getPlayers);
  // send the data back
  return res.json(players);
}

// Create a New Player
const createPlayer = (req, res) => {
  // Define Validation for player
  const Joi = require('joi');

  const data = req.body; 

  const schema = Joi.object().keys({
    firstName: Joi.string().required(), 
    lastName: Joi.string().required(),
    winning: Joi.number().required(), 
    country: Joi.string().required(), 
  }); 

  // Validate request data agianst schema
  Joi.validate(data, schema, (err, value) => {
    const id = Math.ceil(Math.random() * 9999999); 

    if (err) {
      res.status(422).json({
        status: 'error', 
        message: 'Invalid data for request', 
        data: data
      }); 
    } else {
      res.json({
        status: 'success', 
        message: 'Player successfully created', 
        data: Object.assign({id}, value)
      }); 
    }
  }); 
}

// Display a player
const getPlayer = (req, res) => {
  let id = req.params.id;
  id = Number.parseInt(id);

  const foundPlayer = players.find((
    player => {
      return player.id === id;
    }
  ))  
  if (foundPlayer) {
    console.log(foundPlayer);
    return res.json(foundPlayer);
  } else {
    return res.sendStatus(404)
  }

}

// Edit player method
const editPlayer = (req, res) => {
  let id = req.params.id;
  id = Number.parseInt(id);

  const foundPlayer = players.find((
    player => {
       return player.id === id
    }
  ))

  if (foundPlayer) {
    if(req.body.firstName){
      foundPlayer.firstName = req.body.firstName
    } if (req.body.lastName){
      foundPlayer.lastName =  req.body.lastName
    } if (req.body.winning){
      foundPlayer.winning = req.body.winning
    } if (req.body.country){
      foundPlayer.country = req.body.country
    }
    console.log(foundPlayer);
    res.json(foundPlayer);
  }else {
    return res.status(400).send({
      message: "content cannot be empty"
    });
  }
}

// delete function attempt 2
const deletePlayer = (req, res ) => {
  // search for the ID
  let id = req.params.id;
  // Return it as an int value
  id = Number.parseInt(id);

  // 
  const foundPlayer = players.find((
    player => {
      return player.id === id;
    }
  ))
  console.log(players.indexOf(foundPlayer));
  if (foundPlayer) {
    players.splice(players.indexOf(foundPlayer), 1);
    res.sendStatus(204); 
  } else {
    res.sendStatus(404);
  }
}


router.get('/:id', getPlayer);
router.get('/', getPlayers);
router.post('/', createPlayer);
router.patch('/:id', editPlayer); 
router.delete('/:id', deletePlayer);
module.exports = router;