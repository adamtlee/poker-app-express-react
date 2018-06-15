var supertest = require("supertest"); 
var should = require("should"); 

var server = supertest.agent("http://localhost:3000"); 

describe("sample test case", function(){
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

}); 