const AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: 'accessKeyId',
    secretAccessKey: 'secretAccessKey',
    region: "eu-west-2",
    endpoint: "http://localhost:8000"
});
const dynamodb = new AWS.DynamoDB(),
    { db } = require('../project/constants/constants');

const deleteTables = async () => {
    try {
        console.log('deleting ')
        await dynamodb.deleteTable({ 'TableName': db.tableName }).promise();
        await dynamodb.waitFor('tableNotExists', { TableName: db.tableName }).promise();
    } catch (error) {
        console.log('Failed to delete the table', error);
    }
}

module.exports = deleteTables;

