var supertest = require('supertest');  
var chai = require('chai');  
chai.should(); 
var app = require('../server.js');

global.app = app;  
global.expect = chai.expect;  
global.request = supertest(app);