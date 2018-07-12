var supertest = require("supertest");  
let chai = require('chai'); 
var dbSetup = require("../setup/db");
var dbDelete = require("../setup/deleteTable");
chai.should(); 

var server = require('../server.js'); 
var request = supertest(server);

describe("DELETE players route", function(){ 
    let seedPlayers;
    before(async () => {
        console.log("[Delete]seeding players...")
         seedPlayers = await dbSetup.seedTable();
         console.log(seedPlayers)
         return seedPlayers;
     }); 
    
    it('Deletes a user by ID', function (){
       let playerId = seedPlayers[0].id; 
       request.delete(`/player/${playerId}`)
       .then(response => {
           var {
               status
           } = response
           status.should.eql(204)
       })
    });  

    it('Fails to delete a non-existing user ', function (){
        let playerId = { fakeId: "fakeId"}
        return request.delete(`/player/${playerId}`)
            .then(response => {
                var {
                    status
                } = response
                status.should.eql(404)
            })  
    });
    // after (async () => {
    //     console.log("[Delete]tests complete deleting db...")
    //     return await dbDelete();

    // })
});