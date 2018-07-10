var supertest = require("supertest"); 
var should = require("should"); 

let chai = require('chai'); 
chai.should(); 

var server = require('../server.js'); 
var request = supertest(server); 

describe("PATCH players route", function(){ 
    // Edit a user
    it('Edits a user', function (){
        var player = {id: 7345780}
        return request.patch('/player/' + player.id)
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
        body[0].should.have.property('firstName').and.to.be.a('string');
        body[0].should.have.property('lastName').and.to.be.a('string');
        body[0].should.have.property('winning');
        body[0].should.have.property('country').and.to.be.a('string'); 
    });  

    it('Retrieves previously Edited player 2', function(){
        return request.get('/player/2')
        .then(response => {
            var {
                status, 
                body
            } = response
            status.should.eql(200)
        })
         // Check that the body is an array
         body.should.an('array');
         // Check that the content is not null (0)
         body.should.not.equal(0);
        return request.get('/player/2')
         // Check that the property contains a first name that is a string value
         body[0].should.have.property('firstName').and.to.be.a('string');
         body[0].should.have.property('lastName').and.to.be.a('string');
         body[0].should.have.property('winning');
         body[0].should.have.property('country').and.to.be.a('string'); 
    })

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