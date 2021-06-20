exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("friends")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("friends").insert([
        { id: 1, userID: 2 },
        { id: 2, userID: 3 },
        { id: 3, userID: 4 },
        { id: 4, userID: 5 },
      ]);
    });
};

/*DATA REQUIRED: 
userID
RSVP
*/
