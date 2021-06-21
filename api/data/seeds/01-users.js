exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert([
        {
          id: 1,
          name: "Aldo",
          username: "aldo",
          password:
            "$2a$10$atZ61ga6YEgot.aEqJhFReD5xg34.QeZiG8oCq1zCObQy8PRW9AK2",
        },
        {
          id: 2,
          name: "Will",
          username: "will",
          password:
            "$2a$10$LXUFzYNKHNL9uixmvKtdEuNh8wtRroiBZvyM4SLksAdVo3gF0HRu.",
        },
        {
          id: 3,
          name: "Ethan",
          username: "ethan",
          password:
            "$2a$10$hDt3vfoTAkHcX6PBQ5/mZeRBx3ixdn8syHIisjjhVEYTMcsxia0XO",
        },
        {
          id: 4,
          name: "bryan",
          username: "bryan",
          password:
            "$2a$10$Gyg8xADW9qOa9bImYr0lwu/.TcvUG40AyHMJYjp1Xfr4Jn6JwSLp2",
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
