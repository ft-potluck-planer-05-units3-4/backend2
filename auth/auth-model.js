const db = require("../data/db-config");

module.exports = {
  add,
  findByID,
  findBy,
};

function findByID(id) {
  return db("users").where({ id }).first();
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const [newUser] = await db("users").insert(user);
  return newUser;
}
