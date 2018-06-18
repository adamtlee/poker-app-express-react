var supertest = require("supertest"); 
var should = require("should"); 

let chai = require('chai'); 

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

    // Edit Player Test Case
    // it("Should update a player", function(done){
    //     server
    //     .patch("player/1")
        
    // });


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

     // Create a Player Test Case 
     it('saves a new player', function( ){
        server    
        .post('/player')
        .send({
            id: 4,
            firstName: 'bob', 
            lastName: 'smith', 
            winning: '42', 
            country: 'Brazil'

        })
        .expect(201)
        .end(function(err, res){
            //res.status.should.equal(201); 
            expect(res.statusCode).to.equal(201); 
            expect('Location', '/player');
            done(); 
        }); 
    }); 

    // Edit a user
    it('Edits a user', function (){
        server
        .patch('/player/2')
        .send({
            firstName: 'patchy'
        })
        .expect(201)
        .end(function(err, res){
            expect(res.statusCode).to.equal(201); 
            expect('Location', '/player'); 
            done(); 
        });
    });
}); 