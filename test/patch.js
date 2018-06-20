var supertest = require("supertest"); 
var should = require("should"); 

let chai = require('chai'); 

var server = supertest.agent("http://localhost:3000"); 
describe("PATCH players route", function(){ 
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