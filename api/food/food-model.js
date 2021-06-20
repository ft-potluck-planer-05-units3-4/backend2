const db = require("../data/db-config");

module.exports = {
  get,
  getByID,
  add,
  update,
  remove,
};

function get() {
  return db("food");
}

function getByID(id) {
  return db("food").where({ id }).first();
}

async function add(food) {
  const [newFood] = await db("food").insert(food);
  const foo = await getByID(newFood);
  return foo;
}

function update(id, changes) {
  return db("food").where({ id }).update(changes);
}

function remove(id) {
  return db("food").where({ id }).del();
}
