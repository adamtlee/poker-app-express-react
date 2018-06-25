/*
    Refactor get, patch, delete - TODO
    node index.js should run all test cases
*/
var supertest = require("supertest"); 
let chai = require('chai'); 
chai.should();

var server = require('../server.js');
var request = supertest(server);

describe("POST players route", function(){ 
    // Create a Player Test Case 
    it('saves a new player', function( ){
        return request.post('/player')
            .send({
                firstName: 'bob', 
                lastName: 'smith', 
                winning: '42', 
                country: 'Brazil'
            })
            .then(response => {
                var {
                    status,
                    body
                } = response
                console.log(response)
                status.should.eql(201)
            })
        // server    
        // .post('/player')
        // .send({
        //     id: 4,
        //     firstName: 'bob', 
        //     lastName: 'smith', 
        //     winning: '42', 
        //     country: 'Brazil'
        // })
        // // Saves a Player Test Case
        // .expect(201)
        // .end(function(err, res){
        //     console.log(res,'23232343242343242344')
        //     res.status.should.equal(201); 
        //     // expect(res.statusCode).to.equal(201); 
        //     // expect('Location', '/player');
        //     done(); 
        // }); 
    });

    it('fails to post a new player due to missing field (lastName = null)', function(){
        return request.post('/player')
            .send({
                firstName: 'failingPlayer',  
                winning: '42', 
                country: 'Brazil'
            })
            .then(response => {
                var {
                    status, 
                    body
                } = response
                console.log(response)
                status.should.eql(422)
            })
    })
    
    // it('posts an invalid user', function(){
    //     server
    //     .post('/player')
    //     .send({
    //        lastName: 'errorsmith',
    //         winning: '49', 
    //         country: 'USA' 
    //     })
    //     .expect(422)
    //     .end(function(err, res){
    //         expect(res.statusCode).to.equal(422); 
    //         expect('Location', '/player'); 
    //         done(); 
    //     })
    // })
}); 
 