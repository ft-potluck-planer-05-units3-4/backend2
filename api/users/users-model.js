const db = require("../data/db-config");

module.exports = {
  get,
  getByID,
  update,
  remove,
  getInvited,
  getInvited2,
  getInfo,
  // getInfo2,
  editInfo,
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
function getInfo(id) {
  return db("friends").where("friends.userID", id).first();
}
function editInfo(id, changes) {
  return db("friends").where("friends.userID", id).update(changes);
}
// function getInfo2(id) {
//   return (
//     db
//       .select(
//         "f.RSVP",
//         // "e.id",
//         // "e.title",
//         // "e.description",
//         // "e.month",
//         // "e.day",
//         // "e.year",
//         // "e.start_time",
//         // "e.end_time",
//         // "e.location",
//         "EF.eventsID"
//       )
//       // .from("users as u")
//       // .join("friends as f", "f.userID", "=", "u.id")
//       // .join("events_friends as EF", "f.id", "=", "EF.userID")
//       // .join("events as e", "e.id", "=", "EF.eventsID")
//       .from("friends as f")
//       .join("events_friends as EF", "EF.userID", "=", "f.userID")
//       // .join("events as e", "e.userID", "=", "EF.userID")
//       // .join("events as e", "e.id", "=", "EF.eventsID")
//       // .join("friends as f", "EF.userID", "=", "f.userID")
//       // // .join("events_friends as EF", "EF.userID", "=", "e.id")
//       // .update("friends")
//       .where("friends.userID", id)
//   );
// }
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
    .where("EF.userID", id);
}
function getInvited2(id) {
  return (
    db
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
        "e.location",
        "EF.eventsID"
      )
      // .from("users as u")
      // .join("friends as f", "f.userID", "=", "u.id")
      // .join("events_friends as EF", "f.id", "=", "EF.userID")
      // .join("events as e", "e.id", "=", "EF.eventsID")
      .from("events_friends as EF")
      .join("events as e", "e.id", "=", "EF.eventsID")
      .join("friends as f", "EF.userID", "=", "f.userID")
      // .join("events_friends as EF", "EF.userID", "=", "e.id")
      .where("EF.userID", id)
  );
}
