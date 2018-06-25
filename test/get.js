var supertest = require("supertest"); 
var should = require("should"); 
let chai = require('chai'); 
chai.should();

var server = require('../server.js');
var request = supertest(server);

//var server = supertest.agent("http://localhost:3000"); 

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
                body.should.an('array');
                // body.length.not.equal(0);
                //body[0].should.have.property.equal('firstName')
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