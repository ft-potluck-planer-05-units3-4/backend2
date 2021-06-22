const db = require("../data/db-config");

module.exports = {
  get,
  getByID,
  add,
  update,
  remove,
  getFoodList,
  getUserID,
  getInvited,
  addInvited,
  deleteInvited,
  // updateList,
};

function get() {
  return db
    .select(
      "e.id",
      //   "u.name as organizer",
      "e.title",
      "e.description",
      "e.month",
      "e.day",
      "e.year",
      "e.start_time",
      "e.end_time",
      "e.location"
    )
    .from("events as e");
  // .join("users as u", "u.id", "=", "e.userID");
}

function getUserEventByID(id) {
  return db
    .select(
      "e.id",
      "u.id",
      "e.title",
      "e.description",
      "e.month",
      "e.day",
      "e.year",
      "e.start_time",
      "e.end_time",
      "e.location"
    )
    .from("events as e")
    .join("users as u", "u.id", "=", "e.userID")
    .where("e.id", "=", `${id}`)
    .first();
}
function getByID(id) {
  return (
    db
      .select(
        "e.id",
        //   "u.id",
        "e.title",
        "e.description",
        "e.month",
        "e.day",
        "e.year",
        "e.start_time",
        "e.end_time",
        "e.location"
      )
      .from("events as e")
      // .join("users as u", "u.id", "=", "e.userID")
      .where("e.id", "=", `${id}`)
      .first()
  );
}

async function add(event) {
  const [newEvent] = await db("events").insert(event, "id");
  const ev = await getByID(newEvent);
  return ev;
}

function update(id, changes) {
  return db("events").where({ id }).update(changes);
}

function remove(id) {
  return db("events").where({ id }).first().delete();
}
//get /events/:id/food
function getFoodList(id) {
  return db
    .select(
      "f.id",
      "f.eventID",
      "e.title as event_name",
      "f.userID",
      "f.category",
      "f.quantity",
      "f.name",
      "f.assigned"
    )
    .from("food as f")
    .join("events as e", "e.id", "=", "f.eventID")
    .where({ eventID: id });
}
//get /events/users/:id
function getUserID(id) {
  return db("events").where({ userID: id });
}
//GET /events/:id/invited
function getInvited(id) {
  return db
    .select(
      "u.id",
      "f.userID",
      "EF.eventsID",
      "e.title",
      "u.name",
      "u.username",
      "f.RSVP"
    )
    .from("friends as f")
    .join("users as u", "u.id", "=", "f.userID")
    .join("events_friends as EF", "f.userID", "=", "EF.userID")
    .join("events as e", "e.id", "=", "EF.eventsID")
    .where({ eventsID: id });
}
//POST /events/:id/invited
async function addInvited(id, friend) {
  const [newInvite] = await db("events_friends")
    .where({ eventsID: id })
    .insert(friend);
  return newInvite;
}

function deleteInvited(id, friend) {
  return db("events_friends").where({ eventsID: id, userID: friend }).delete();
}

// function updateList(id, changes) {
//   return db("friends").where({ id }).update(changes);
// }
