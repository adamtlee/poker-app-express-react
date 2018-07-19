# Introduction
This is the repository for a sample API built with Node, Express, DynamoDB(local). The API was built to manage Poker players following a micro-service architecture.
*  [Getting Started](#getting-started)
*  [Project setup](#project-setup)
*  [Accessing the API with CURL](#accessing-the-api-with-curl)

## Getting Started

### Requirements
-  [Node.js](https://nodejs.org/)
-  [DynamoDB](https://aws.amazon.com/documentation/dynamodb/)

## Project Setup
1. To start off you should ensure that a local instance of DynamoDB is running. to do this follow the documentation from AWS or navigate to the source directory of where the DynamoDBLocal.jar file was extracted and run the following: 
```
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb
```
2. Once a local instance of Dynamo is running, clone the repository in the terminal: 
```
git clone https://github.com/adamtlee/poker-app-express-react.git
```
3. Navigate to the source folder: 
```
cd poker-app-express-react/
```
4. Install the node modules:
```
npm install
```
5.  Run the Server: 
```
npm start
```

## Accessing the API with CURL
To ensure that the setup is configured correctly, we can test the API using curl. 
First ensure that the following local instances are running on your machine. 
-  DynamoDB
-  poker-app-express-react API 

> You may also use Postman to access the API and Dynamo-Admin to view tables created in your local database.
```
curl --request  GET http://localhost:5000/player/
```
This should return an empty array of players. 