var supertest = require("supertest");  
let chai = require('chai'); 
var dbSetup = require("../setup/db");
chai.should(); 

var server = require('../server.js'); 
var request = supertest(server);

describe("DELETE players route", function(){ 
    let seedPlayers;
    before(async () => {
         //deleteTableData=  await deleteDb.deleteTables();
         //await dbSetup.resetDatabase();
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
});