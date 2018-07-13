/*
    Refactor get, patch, delete - TODO
    node index.js should run all test cases
*/
const supertest = require("supertest"),
    chai = require('chai'),
    server = require('../server.js'),
    dbSetup = require("../setup/db"),
    dbDelete = require("../setup/deleteTable"),
    request = supertest(server),
    { routes } = require('../project/constants/constants');

chai.should()

describe("POST players route", function () {
    let seedPlayers;
    before(async () => {
        console.log("[Post]seeding players...");
        seedPlayers = await dbSetup.seedTable();

        return seedPlayers;
    });
    // Create a Player Test Case 
    it('saves a new player', function () {
        const playerData = {
            firstName: 'Hermione',
            lastName: 'Granger',
            winning: '32',
            country: 'USA'
        }
        console.log(playerData);
        return request.post(`/${routes.player}`)
            .send(playerData)
            .then(response => {
                var {
                    status,
                    body
                } = response
                status.should.eql(201)
            })
        body.should.have.property('firstName').and.to.be.a('string');
        body.should.have.property('lastName').and.to.be.a('string');
        body.should.have.property('winning');
        body.should.have.property('country').and.to.be.a('string');
    });

    it('fails to post a new player due to missing field (lastName = null)', function () {
        return request.post(`/${routes.player}`)
        const playerData = {
            firstName: 'failingPlayer',
            winning: '42',
            country: 'Brazil'
        }
            .send(playerData)
            .then(response => {
                var {
                    status,
                    body
                } = response
                status.should.eql(400)
            })
    })
    after(async () => {
        console.log("[Post]tests complete deleting db...")
        return await dbDelete();
    })
});
