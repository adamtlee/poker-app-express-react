const Mocha = require('mocha');
var supertest = require('supertest');
var chai = require('chai');
const path = require('path');
chai.should();
var app = require('../server.js');
const deleteTable = require('../setup/deleteTable');
const { createTable } = require('../setup/db');

const mocha = new Mocha({
  timeout: 30000
});

const testFiles = [
  'post.js',
  'get.js',
  'patch.js',
  'delete.js'
],
  {
    getPlayerId
  } = require('../setup/db')

testFiles.forEach(file => {
  mocha.addFile(`${__dirname}/${file}`);
});

// Run the tests.
mocha.run().on('end', async () => {

  process.stdout.write('Tests complete\n');
  process.exit(0);
});
