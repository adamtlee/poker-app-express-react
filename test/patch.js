var supertest = require("supertest"); 
var should = require("should"); 

let chai = require('chai'); 
chai.should(); 

var server = require('../server.js'); 
var request = supertest(server); 

describe("PATCH players route", function(){ 
    // Edit a user
    it('Edits a user', function (){
        return request.patch('/player/2')
        .send({
            firstName: 'patchy3453', 
            lastName: 'lastpatchy'
        })
        .then(response => {
            var {
                status, 
                body
            } = response
            status.should.eql(200)
        })
    });  

    it('Should fail to update a non-existing player', function(){
        return request.patch('/player/fd')
        .send({
            firstName: 'noPlayer',
            lastName: 'lastnoPlayer'
        })
        .then(response => {
            var {
                status, 
                body
            } = response 
            status.should.eql(404)
        })
    })
});