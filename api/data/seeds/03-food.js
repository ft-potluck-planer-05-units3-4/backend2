exports.seed = function (knex) {
  return knex("food")
    .del()
    .then(function () {
      return knex("food").insert([
        {
          id: 1,
          eventID: 1,
          category: "Meat",
          quantity: "20 patties",
          name: "Burgers",
        },
        { id: 2, eventID: 1, category: "Side", quantity: "1", name: "chips" },
        {
          id: 3,
          eventID: 1,
          category: "Beverage",
          quantity: "10 liters",
          name: "soda",
        },
        {
          id: 4,
          eventID: 2,
          category: "Beverage",
          quantity: "1 keg",
          name: "beer",
        },
      ]);
    });
};

/*DATA REQUIRED: 
eventID
userID (optional-defaults to null)
category
quantity
name
assigned (optional--defaults to false)
*/
