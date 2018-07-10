const PlayerController = require('../project/controllers/player.controller'),

  playerController = new PlayerController();

 const seedTable = async () => {
  let playerData = [];
      data = [
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
        wiinning: 300, 
        country: "USA"
       }
      ];
    playerData.push(await playerController.create({ body, data }));
    return playerData;
  }

module.exports = {
 seedTable
}
