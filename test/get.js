var supertest = require("supertest"); 
let chai = require('chai'); 
var seedPlayers = require("../setup/db")
chai.should();

var server = require('../server.js');
var request = supertest(server);

describe('Get Players tests', function() {
    // playerId = dynamodb.getPlayerId(); 
    let seedPlayers;

    before(async () => {
       // await setup.resetDatabase();
        seedPlayer = await seedPlayers();
        return;
    }); 
})

describe("GET players route", function(){ 
    it('Should obtain the index of players', function(){
        return request.get('/players')
            .then(response => {
                var { 
                    status, 
                    body
                } = response
                //console.log(response.body, status)
                status.should.eql(200)
                // Check that the body is an array
                body.should.an('array');
                // Check that the content is not null (0)
                body.should.not.equal(0);
                // Check that the property contains a first name that is a string value
                body[0].should.have.property('firstName').and.to.be.a('string');
                body[0].should.have.property('lastName').and.to.be.a('string');
                body[0].should.have.property('winning');
                body[0].should.have.property('country').and.to.be.a('string'); 
            })
    }); 

    // Fail to retrieve id of non existant player
    it("should return 404 status of not found of an invalid user id ", function(){
        return request.get('/player/a')
            .then(response => {
                var{
                    status, 
                    body
                } = response
                status.should.eql(404)
            })
    });

    it("should get a player", function () {
        let playerId = seedPlayers[0].playerId; 
        return request.get(`/players/${playerId}`)
            .then(response => {
                let {
                    status, 
                    body
                } = response; 
                status.should.equal(200, 'status = 200'); 
            });
    }); 
        // // Testing the status 404 for player not found
        // it('returns status 404 when id is not found', function() {
        //     var player = { id: 'fakeId' }
        //     return request.get('/players/' + player.id)
        //       .then(response => {
        //         var { 
        //           status, 
        //           body
        //         } = response
        //         status.should.eql(404)
        //       })
        // });
    
    // // Retrieve id of a specified player 
    // it("should return id of a player selected ", function(){
    //    var player = server.docClient.get('Players').first(); 
    //    return request.get('/players/' + player.id)
    //     .then(response => {
    //         var {
    //             status, 
    //             body
    //         } = response
    //         status.should.eql(200)   
    //     })
    // });
}); 