const AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
});
const dynamodb = new AWS.DynamoDB(),
    { db } = require('../project/constants/constants');
// Check if the node env is in test
if (process.env.NODE_ENV === 'test') {
    dbName = process.env.TEST_PLAYERS_TABLE_NAME;
}
const deleteTables = async () => {
    try {
        await dynamodb.deleteTable({ 'TableName': db.tableName }).promise();
        await dynamodb.waitFor('tableNotExists', { TableName: db.tableName }).promise();
    } catch (error) {
        console.log('Failed to delete the table');
    }
}

module.exports = deleteTables;

