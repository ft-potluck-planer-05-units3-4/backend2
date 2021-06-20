exports.up = function (knex) {
  return knex.schema
    .createTable("users", (users) => {
      users.increments();
      users.string("name").notNullable().index();
      users.string("username").notNullable().unique().index();
      users.string("password").notNullable();
    })
    .createTable("events", (events) => {
      events.increments();
      events
        .integer("userID")
        .unsigned()
        // .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      events.string("title").notNullable();
      events.string("description");
      events.string("month").notNullable();
      events.integer("day").notNullable();
      events.integer("year").notNullable();
      events.integer("start_time").notNullable();
      events.integer("end_time").notNullable();
      events.string("location").notNullable();
    })
    .createTable("food", (food) => {
      food.increments();
      food
        .integer("eventID")
        .unsigned()
        .notNullable()
        .references("events.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      food
        .integer("userID")
        .unsigned()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      food.string("category").notNullable();
      food.varchar("quantity").notNullable();
      food.string("name").notNullable().unique();
      food.boolean("assigned").defaultTo(false);
    })
    .createTable("friends", (friends) => {
      friends.increments();
      friends
        .integer("userID")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      friends.boolean("RSVP").defaultTo(false);
    })
    .createTable("events_friends", (events_friends) => {
      events_friends.increments();
      events_friends
        .integer("eventsID")
        .unsigned()
        .notNullable()
        .references("events.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      events_friends
        .integer("userID")
        .unsigned()
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("events_friends")
    .dropTableIfExists("friends")
    .dropTableIfExists("food")
    .dropTableIfExists("events")
    .dropTableIfExists("users");
};
