var AWS = require("aws-sdk");
var fs = require('fs');
AWS.config.update({
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();
console.log("Importing Players into DynamoDB. Please wait....");
var players = JSON.parse(fs.readFileSync('playerData.json', 'utf8'));
players.forEach(function(player) {
  console.log(player)
var params = {
        TableName: "Players",
        Item: {
            "id": player.id,
            "firstName": player.firstName,
            "lastName": player.lastName,
            "winning": player.winning,
            "country": player.country
        }
    };
docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add player", player.firstName, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", player.firstName);
       }
    });
});
