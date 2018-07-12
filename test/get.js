const supertest = require("supertest"),
    chai = require('chai'),
    dbSetup = require("../setup/db"),
    dbDelete = require("../setup/deleteTable"),
    { routes } = require('../project/constants/constants');
chai.should();

var server = require('../server');
var request = supertest(server);

describe("GET players route", function () {
    let seedPlayers;
    before(async () => {
        console.log("[Get]seeding players...");
        seedPlayers = await dbSetup.seedTable();
   
        return seedPlayers;
    });

    it('Should obtain the index of players', function () {
        return request.get(`/${routes.player}`)
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
    it("should return 404 status of not found of an invalid user id ", function () {
        let playerId = 666
        return request.get(`/${routes.player}/${playerId}`)
            .then(response => {
                var {
                    status,
                    body
                } = response
                status.should.eql(404)
            })
    });

    it("should get a player", function () {
        let playerId = seedPlayers[1].id;
        console.log("player at index 1: ", seedPlayers[1].id)
        return request.get(`/${routes.player}/${playerId}`)

            .then(response => {
                let {
                    status,
                    body
                } = response;
                status.should.equal(200, 'status = 200');
            })
            .catch((e) => {
                console.log(e);
            });
    });

    after (async () => {
        console.log("[Get]test complete deleting db...")
        return await dbDelete();
    })
}); 