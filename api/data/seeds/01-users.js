exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          id: 1,
          name: "Aldo",
          username: "aldo",
          password: "aldo",
        },
        {
          id: 2,
          name: "Will",
          username: "will",
          password: "will",
        },
        {
          id: 3,
          name: "Ethan",
          username: "ethan",
          password: "ethan",
        },
        {
          id: 4,
          name: "bryan",
          username: "bryan",
          password: "bryan",
        },
        {
          id: 5,
          name: "bob",
          username: "bob",
          password: "bob",
        },
      ]);
    });
};

/*DATA REQUIRED: 
name
username
password
*/
