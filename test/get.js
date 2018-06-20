var supertest = require("supertest"); 
var should = require("should"); 

let chai = require('chai'); 

var server = supertest.agent("http://localhost:3000"); 

describe("GET players route", function(){ 
    it('Should obtain the index of players', function(done){
        server
        .get('/player/')
        .expect("content-type", /json/)
        .end(function(err, res){
            res.status.should.equal(200);
            done(); 
        });
    }); 

    // Fail to retrieve id of non existant player
    it("should return 404 status of not found of an invalid user id ", function(done){
        server 
        .get("/player/a")
        .expect(404)
        .end(function(err, res){
            res.status.should.equal(404); 
            done(); 
        });
    });
    
    // Retrieve id of a specified player 
    it("should return id of a player selected (in this case player id = 3", function(done){
        server 
        //.get("/player/" + player.id)
        .get("/player/3")
        .expect("content-type",/json/)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200); 
            done(); 
        });
    });

}); 