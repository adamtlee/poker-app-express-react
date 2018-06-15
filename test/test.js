var supertest = require("supertest"); 
var should = require("should"); 

var server = supertest.agent("http://localhost:3000"); 

// sample test suite
describe("Unit Test", function(){

    // Retrieve Index of Players
    it("should return index page of players", function(done){
        server
        .get("/player/")
        .expect("content-type",/json/)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200); 
            done(); 
        });
    });

    // Create a Player Test Case 
    // TODO

    // Edit Player Test Case
    // TODO


    // Retrieve id of non existant player
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
    it("should return id of a player selected (in this case player id = 1)", function(done){
        server 
        .get("/player/1")
        .expect("content-type",/json/)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200); 
            done(); 
        });
    });

    // Delete id of a specified player
    it("should delete id of a selected player (in this case player id = 1)", function(done){
        server 
        .delete("/player/1")
        .expect(204)
        .end(function(err,res){
            res.status.should.equal(204); 
            done();
        });
    });
}); 