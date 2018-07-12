const Mocha = require('mocha');
var supertest = require('supertest');  
var chai = require('chai');  
chai.should(); 
var app = require('../server.js');
const deleteTable = require('../setup/deleteTable');
const createTable = require('../setup/createTable');

const mocha = new Mocha({
  timeout: 30000
});

const testFiles = [
  //'./get.js',
  './patch.js',
  './delete.js',
  //'./post.js'
], 
{
  getPlayerId
} = require('../setup/db')

testFiles.forEach(e => {
  mocha.addFile(e);
});

// Run the tests.
mocha.run().on('end', async () => {

  process.stdout.write('Tests complete\n');
  process.exit(0);
});
