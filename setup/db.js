const PlayerController = require('../project/controllers/player.controller'),
  //{ createTable } = require("../setup/createTable")
  playerController = new PlayerController(),
  { db } = require('../project/constants/constants');

const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: 'accessKeyId',
  secretAccessKey: 'secretAccessKey',
  region: "eu-west-2",
  endpoint: "http://localhost:8000"
});
const dynamodb = new AWS.DynamoDB();

const seedData = [
  {
    firstName: "Harry",
    lastName: "Potter",
    winning: 345,
    country: "USA"
  },
  {
    firstName: "Ron",
    lastName: "Weasly",
    winning: 5280,
    country: "Brazil"
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    winning: 300,
    country: "USA"
  }
];

const checkForTable = async (tableName) => {
  try {
    await dynamodb.describeTable({ 'TableName': tableName }).promise();
    return true
  } catch (e) {
    return false;
  }
}

var params = {
  TableName: db.tableName,
  KeySchema: [
    { AttributeName: "id", KeyType: "HASH" },  //Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: "id", AttributeType: "N" },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  }
};

const createTable = async () => {
  let tableExists = await checkForTable(db.tableName);

  if (!tableExists) {
    try {
      return await dynamodb.createTable(params).promise();
    } catch (e) {
      console.log('create table', e)
    }
  }

  return {};


}

const seedTable = async () => {
  await createTable();

  const players = await seedData.map(async (player) => {
    const newPlayer = await playerController.create(player)
    return newPlayer;
  })

  return Promise.all(players);
}

module.exports = {
  seedData,
  seedTable,
  checkForTable,
  createTable
}
