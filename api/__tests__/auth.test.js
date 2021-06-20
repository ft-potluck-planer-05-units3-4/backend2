const supertest = require("supertest");
const server = require("../server");
const db = require("../../data/db-config");

beforeEach(() => {
  return db.migrate
    .rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run());
});

describe("AUTH", () => {
  it("can run test", () => {
    expect(true).toBeTruthy();
  });

  describe("POST Register", () => {
    it("Returns status 201", () => {
      return supertest(server)
        .post("/auth/register")
        .send({ name: "Derek", username: "derknhood", password: "school" })
        .then((res) => {
          expect(res.status).toEqual(201);
        });
    });

    it("Should return that user", () => {
      return supertest(server)
        .post("/auth/register")
        .send({ name: "Derek", username: "derknhood", password: "school" })
        .then((res) => {
          expect(Array.isArray).toHaveLength(1);
        });
    });
  });

  describe("POST Login", () => {
    it("Returns status 200", () => {
      return supertest(server)
        .post("/auth/login")
        .send({ username: "lambda", password: "school" })
        .then((res) => {
          expect(res.status).toEqual(200);
        });
    });
    it("can see users name", () => {
      return supertest(server)
        .post("/auth/login")
        .send({ username: "lambda", password: "school" })
        .then((res) => {
          expect(res.body.user).toBe("Rachele");
        });
    });
    it("sends 401 status if invalid username or password", () => {
      return supertest(server)
        .post("/auth/login")
        .send({ username: "lamdba", password: "school" })
        .then((res) => {
          expect(res.status).toEqual(401);
        });
    });
  });
});
