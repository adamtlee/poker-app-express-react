
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
// const editPlayer = (req, res) => {
//   let id = req.params.id;
//   id = Number.parseInt(id);

//   const foundPlayer = players.find((
//     player => {
//       return player.id === id;
//     }
//   ))

//   if (foundPlayer) {
    
//   } else {
//     return res.sendStatus(404)
//   }
// }



router.get('/:id', getPlayer);
router.get('/', getPlayers);
router.post('/', createPlayer);
// router.put('/:id', editPlayer);
// router.delete('/:id', deletePlayer);


module.exports = router;