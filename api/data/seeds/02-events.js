exports.seed = function (knex) {
  return knex("events")
    .del()
    .then(function () {
      return knex("events").insert([
        {
          id: 1,
          userID: 1,
          title: "4th of July Celebration",
          description: "Join us for some great BBQ and summer fun!",
          month: "July",
          day: 4,
          year: 2021,
          start_time: 2,
          end_time: 10,
          location: "123 Golden Rd, Newport Beach, CA",
        },
        {
          id: 2,
          userID: 2,
          title: "Beach Bonfire",
          description: "Join us for a Bonfire!",
          month: "June",
          day: 3,
          year: 2021,
          start_time: 6,
          end_time: 9,
          location: "1  Beach Drive, Laguna Beach, CA",
        },
      ]);
    });
};
