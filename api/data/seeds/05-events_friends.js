
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events_friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('events_friends').insert([
        {id: 1, eventsID: 1, userID: 2},
        {id: 2, eventsID: 1, userID: 3},
        {id: 3, eventsID: 1, userID: 4},
        {id: 4, eventsID: 1, userID: 5}
      ]);
    });
};

/*DATA REQUIRED: 
eventsID
friendsID
*/