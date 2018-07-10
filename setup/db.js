const PlayerController = require('../project/controllers/player.controller'),
playerController = new PlayerController();

seedData = [
  {
   firstName: "Harry",
   lastName: "Potter",
   winning: 345, 
   country: "USA"
  },
  {
   firstName: "Ron", 
   lastName: "Weasly",
   winning:5280, 
   country: "Brazil"
  },
  {
   firstName: "Albus", 
   lastName: "Dumbledore",
   winning: 300, 
   country: "USA"
  }
]
 const seedTable = async () => {
      const players = await seedData.map(async (player) => {
      const newPlayer = await playerController.create(player)
      return newPlayer; 
 })
 console.log("player method: ", players);
 return Promise.all(players);
}


module.exports = {
  seedData, 
  seedTable
}
