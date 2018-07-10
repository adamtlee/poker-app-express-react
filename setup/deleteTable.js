var AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
});
var dynamodb = new AWS.DynamoDB();
// Check if the node env is in test
let dbName = "Players"
if (process.env.NODE_ENV === 'test') {
    dbName = process.env.TEST_PLAYERS_TABLE_NAME;
}
const deleteTables = async () => {
    try {
      await dynamodb.deleteTable({ 'TableName': dbName }).promise();
      await dynamodb.waitFor('tableNotExists', { TableName: dbName }).promise();
    } catch (error) {
      console.log('Failed to delete the table');
    }
}

module.exports = deleteTables;

