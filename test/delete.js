var supertest = require("supertest"); 
var should = require("should"); 

let chai = require('chai'); 

var server = supertest.agent("http://localhost:3000"); 
describe("DELETE players route", function(){ 
    // Edit a user
    it('Deletes a specific user (id = 2)', function (){
        server
        .delete('/player/2')
        .expect(204)
        .end(function(err, res){
            expect(res.statusCode).to.equal(204); 
            done(); 
        });
    });  

    it('gets a specific user (id = 2) and does not find it', function (){
        server
        .get('/player/2')
        .expect(404)
        .end(function(err, res){
            expect(res.statusCode).to.equal(404); 
            done(); 
        });
    });  
});