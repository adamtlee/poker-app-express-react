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
                console.log(response)
                status.should.eql(200)
            })


        // server
        // .get('/player/')
        // .expect("content-type", /json/)
        // .end(function(err, res){
        //     res.status.should.equal(200);
        //     done(); 
        // });
    }); 

    // Fail to retrieve id of non existant player
    it("should return 404 status of not found of an invalid user id ", function(){
        return request.get('/player/a')
            .then(response => {
                var{
                    status, 
                    body
                } = response
                console.log(response)
                status.should.eql(404)
            })
        // server 
        // .get("/player/a")
        // .expect(404)
        // .end(function(err, res){
        //     res.status.should.equal(404); 
        //     done(); 
    });
    
    // Retrieve id of a specified player 
    it("should return id of a player selected (in this case player id = 3", function(){
       return request.get('/player/3')
        .then(response => {
            var {
                status, 
                body
            } = response
            console.log(response)
            status.should.eql(200)
        
        })
       
        // server 
        // //.get("/player/" + player.id)
        // .get("/player/3")
        // .expect("content-type",/json/)
        // .expect(200)
        // .end(function(err,res){
        //     res.status.should.equal(200); 
        //     done(); 
        });
}); 