var supertest = require("supertest"); 
var should = require("should"); 

let chai = require('chai'); 
chai.should(); 

var server = require('../server.js'); 
var request = supertest(server); 

//var server = supertest.agent("http://localhost:3000"); 
describe("PATCH players route", function(){ 
    // Edit a user
    it('Edits a user', function (){
        return request.patch('/player/2')
        .send({
            firstName: 'patchy3453', 
            lastName: 'lastpatchy'
        })
        .then(response => {
            var {
                status, 
                body
            } = response
            console.log(response)
            status.should.eql(200)
        })
        // server
        // .patch('/player/2')
        // .send({
        //     firstName: 'patchy'
        // })
        // .expect(201)
        // .end(function(err, res){
        //     expect(res.statusCode).to.equal(201); 
        //     expect('Location', '/player'); 
        //     done(); 
        // });
    });  

    it('Should fail to update a non-existing player', function(){
        return request.patch('player/3')
        .send({
            firstName: 'noPlayer',
            lastName: 'lastnoPlayer'
        })
        .then(response => {
            var {
                status, 
                body
            } = response 
            console.log(response)
            status.should.eql(404)
        })
    })
});