const db = require("../data/db-config");

module.exports = {
  get,
  getByID,
  update,
  remove,
  getInvited,
};

function get() {
  return db("users");
}

function getByID(id) {
  return db("users").where({ id }).first();
}

function update(id, changes) {
  return db("users").where({ id }).update(changes);
}

function remove(id) {
  return db("users").where({ id }).del();
}

function getInvited(id) {
  return db
    .select(
      "f.RSVP",
      "e.id",
      "e.title",
      "e.description",
      "e.month",
      "e.day",
      "e.year",
      "e.start_time",
      "e.end_time",
      "e.location"
    )
    .from("users as u")
    .join("friends as f", "f.userID", "=", "u.id")
    .join("events_friends as EF", "f.id", "=", "EF.userID")
    .join("events as e", "e.id", "=", "EF.eventsID")
    .where("f.userID", id);
}
