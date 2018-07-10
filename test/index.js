const Mocha = require('mocha');
var supertest = require('supertest');  
var chai = require('chai');  
chai.should(); 
var app = require('../server.js');

const mocha = new Mocha({
  timeout: 30000
});

const testFiles = [
  //'./post.js',
  './get.js',
  //'./patch.js',
  //'./delete.js'
], 
{
  getPlayerId
} = require('../setup/db')

testFiles.forEach(e => {
  mocha.addFile(e);
});

// Run the tests.
mocha.run().on('end', () => {

  process.stdout.write('Tests complete\n');
  process.exit(0);
});