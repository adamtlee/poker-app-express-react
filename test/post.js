/*
    Refactor get, patch, delete - TODO
    node index.js should run all test cases
*/
var supertest = require("supertest"); 
let chai = require('chai'); 
chai.should();

var server = require('../server.js');
var request = supertest(server);

describe("POST players route", function(){ 
    // Create a Player Test Case 
    it('saves a new player', function( ){
        const playerData = {
            firstName: 'Hermione', 
            lastName: 'Granger', 
            winning: '32', 
            country: 'USA'
        }
        console.log(playerData);
        return request.post(`/players`)
            .send(playerData)
            .then(response => {
                var {
                    status,
                    body
                } = response
                status.should.eql(201)
            })
            body.should.have.property('firstName').and.to.be.a('string');
            body.should.have.property('lastName').and.to.be.a('string');
            body.should.have.property('winning');
            body.should.have.property('country').and.to.be.a('string'); 
    });

    it('fails to post a new player due to missing field (lastName = null)', function(){
        return request.post('/players')
            const playerData = {
                firstName: 'failingPlayer',  
                winning: '42', 
                country: 'Brazil'
            }
            .send(playerData)
            .then(response => {
                var {
                    status, 
                    body
                } = response
                status.should.eql(400)
            })
        })
    }); 
 