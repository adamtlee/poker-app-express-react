
const router = require('express').Router();
const players = [
  { id: 1, firstName: 'Anthony', lastName: 'Romo', winning: '324', country: 'Brazil' },
  { id: 2, firstName: 'Vanessa', lastName: 'bach', winning: '563', country: 'Bolivia' },
  { id: 3, firstName: 'Tom', lastName: 'Herf', winning: '200', country: 'France' }
]
let currentID = 4;

const getPlayers = (req, res) => {
  // some mongo call to get all players
  // const player = playerModel.getPlayerById(id)


  // send the data back
  return res.json(players);
}

// Create a New Player
const createPlayer = (req, res) => {
  // some mongo call to get all players
  let newPlayer = req.body;
  newPlayer.id = currentID;

  currentID++;
  console.log(newPlayer)
  // insert player into db
  players.push(newPlayer);
  // send the data back
  return res.sendStatus(201);
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
    foundPlayer.firstName = req.body.firstName,
    foundPlayer.lastName =  req.body.lastName, 
    foundPlayer.winning = req.body.winning,
    foundPlayer.country = req.body.country
    res.json(foundPlayer);
  }else {
    return res.status(400).send({
      message: "content cannot be empty"
    });
  }
}



router.get('/:id', getPlayer);
router.get('/', getPlayers);
router.post('/', createPlayer);
router.patch('/:id', editPlayer); 
// router.delete('/:id', deletePlayer);


module.exports = router;