var supertest = require("supertest"); 
var should = require("should"); 
let chai = require('chai'); 
chai.should();

var server = require('../server.js');
var request = supertest(server);

describe("GET players route", function(){ 
    it('Should obtain the index of players', function(){
        return request.get('/player')
            .then(response => {
                var { 
                    status, 
                    body
                } = response
                //console.log(response.body, status)
                status.should.eql(200)
                // Check that the body is an array
                body.should.an('array');
                // Check that the content is not null (0)
                body.should.not.equal(0);
                // Check that the property contains a first name that is a string value
                body[0].should.have.property('firstName').and.to.be.a('string');
                body[0].should.have.property('lastName').and.to.be.a('string');
                body[0].should.have.property('winning');
                body[0].should.have.property('country').and.to.be.a('string'); 
            })
    }); 

    // Fail to retrieve id of non existant player
    it("should return 404 status of not found of an invalid user id ", function(){
        return request.get('/player/a')
            .then(response => {
                var{
                    status, 
                    body
                } = response
                status.should.eql(404)
            })
    });
    
    // Retrieve id of a specified player 
    it("should return id of a player selected (in this case player id = 3", function(){
       return request.get('/player/3')
        .then(response => {
            var {
                status, 
                body
            } = response
            status.should.eql(200)   
        })
    });
}); 