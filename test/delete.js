var supertest = require("supertest");  
let chai = require('chai'); 
chai.should(); 

var server = require('../server.js'); 
var request = supertest(server);

describe("DELETE players route", function(){ 
    // Deletes a user
    it('Deletes a specific user (id = 2)', function (){
       request.delete('/player/2')
       .then(response => {
           var {
               status
           } = response
           status.should.eql(204)
       })
    });  

    it('gets a specific user (id = 2) and does not find it', function (){
        return request.get('/player/2')
            .then(response => {
                var {
                    status
                } = response
                status.should.eql(404)
            })  
    });

    it('fails to delete a non-existing user', function(){
        return request.get('/player/z')
        .then(response => {
            var {
                status, 
                body
            } = response
            status.should.eql(404)
        })
    })  
});