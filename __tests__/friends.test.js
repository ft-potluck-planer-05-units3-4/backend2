const supertest = require('supertest')
const server = require('../api/server')
const db = require('../data/db-config')

beforeEach(() => {
    return db.migrate.rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run())
})

describe("FRIENDS", () => {
    it('can run test', () => {
        expect(true).toBeTruthy()
    })
//REMEMBER TO SEND TOKEN
    describe('GET friends', () => {
        it('returns status 200', () => {
            return supertest(server)
            .post('/auth/login')
            .send({username: "lambda", password: "school"})
            .then(res => {
                const token = res.body.token
                return supertest(server)
                .get('/api/events/1/invited')
                .set('authorization', token)
                .then(res => {
                    expect(res.status).toEqual(200)
                })
            })
        })
        it('Access denied if doesnt have token', () => {
            return supertest(server)
            .post('/auth/login')
            .send({username: "lambda", password: "school"})
            .then(res => {
                return supertest(server)
                .get('/api/events/1/invited')
                .then(res => {
                    expect(res.status).toEqual(401)
                })
            })
        })
    })

    describe('POST friends', () => {
        it('returns status 201', () => {
            return supertest(server)
            .post('/auth/login')
            .send({username: "lambda", password: "school"})
            .then(res => {
                const token = res.body.token
                return supertest(server)
                .post('/api/events/1/invited')
                .set('authorization', token)
                .send({userID: 2})
                .then(res => {
                    expect(res.status).toEqual(201)
                })
            })
        })
    })
})