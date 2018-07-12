const supertest = require("supertest"),
    chai = require('chai'),
    dbSetup = require("../setup/db"),
    dbDelete = require("../setup/deleteTable"),
    { routes } = require('../project/constants/constants');
chai.should();

var server = require('../server.js');
var request = supertest(server);

describe("DELETE players route", function () {
    let seedPlayers;
    before(async () => {
        console.log("[Delete]seeding players...")
        seedPlayers = await dbSetup.seedTable();
      
        return seedPlayers;
    });

    it('Deletes a user by ID', function () {
        let playerId = seedPlayers[0].id;
        return request.delete(`/${routes.player}/${playerId}`).then(response => {
            var {
                status
            } = response
            status.should.eql(204)
        })
    });

    it('Fails to delete a non-existing user ', function () {
        let playerId = 666;
        return request.delete(`/${routes.player}/${playerId}`)
            .then(response => {
                var {
                    status
                } = response
                status.should.eql(404)
            })
    });
    after(async () => {
        console.log("[Delete]tests complete deleting db...")
        return await dbDelete();
    })
});