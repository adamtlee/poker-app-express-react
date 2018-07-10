const Mocha = require('mocha');
var supertest = require('supertest');  
var chai = require('chai');  
chai.should(); 
var app = require('../server.js');
var setup = require('../setup/deleteTable');

const mocha = new Mocha({
  timeout: 30000
});

const testFiles = [
  //'./post.js',
  './get.js',
  //'./patch.js',
  './delete.js'
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
  // call the deleteTable in setup/deleteTable.js 
  //await setup.deleteTable();
  //console.log("test tables deleted");
  process.exit(0);
});