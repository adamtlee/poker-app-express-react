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
        return request.post('/player')
            .send({
                firstName: 'bob', 
                lastName: 'smith', 
                winning: '42', 
                country: 'Brazil'
            })
            .then(response => {
                var {
                    status,
                    body
                } = response
                status.should.eql(201)
            })
            body[0].should.have.property('firstName').and.to.be.a('string');
            body[0].should.have.property('lastName').and.to.be.a('string');
            body[0].should.have.property('winning');
            body[0].should.have.property('country').and.to.be.a('string'); 
    });

    it('fails to post a new player due to missing field (lastName = null)', function(){
        return request.post('/player')
            .send({
                firstName: 'failingPlayer',  
                winning: '42', 
                country: 'Brazil'
            })
            .then(response => {
                var {
                    status, 
                    body
                } = response
                status.should.eql(400)
            })
    })
}); 
 