const Events = require("../events/events-model");
const Users = require("../users/users-model");
const Food = require("../food/food-model");

module.exports = {
  isValidReg,
  isValidLogin,
  validEventID,
  validNewEvent,
  validUserID,
  validUser,
  validFoodID,
  validFood,
};
//auth
function isValidReg(user) {
  return Boolean(user.name && user.username && user.password);
}

function isValidLogin(user) {
  return Boolean(user.username && user.password);
}

//events
function validEventID(req, res, next) {
  Events.getByID(req.params.id)
    .then((event) => {
      if (event) {
        req.event = event;
        next();
      } else {
        res.status(400).json({
          message: "Invalid event ID",
        });
      }
    })
    .catch(next);
}

function validNewEvent(req, res, next) {
  const event = req.body;
  if (!event) {
    res.status(400).json({
      message: "Missing event data",
    });
    // }
    // else if(!event.userID){
    //     res.status(400).json({
    //         message: "Missing required userID field"
    //     })
  } else if (!event.title) {
    res.status(400).json({
      message: "Missing required title field",
    });
  } else if (!event.month) {
    res.status(400).json({
      message: "Missing required month field",
    });
  } else if (!event.day) {
    res.status(400).json({
      message: "Missing required day field",
    });
  } else if (!event.year) {
    res.status(400).json({
      message: "Missing required year field",
    });
  } else if (!event.start_time) {
    res.status(400).json({
      message: "Missing required start_time field",
    });
  } else if (!event.end_time) {
    res.status(400).json({
      message: "Missing required end_time field",
    });
  } else if (!event.location) {
    res.status(400).json({
      message: "Missing required location field",
    });
  } else {
    next();
  }
}

//users
function validUserID(req, res, next) {
  Users.getByID(req.params.id)
    .then((user) => {
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(400).json({
          message: "Invalid user ID",
        });
      }
    })
    .catch(next);
}

function validUser(req, res, next) {
  const user = req.body;
  if (!user) {
    res.status(400).json({
      message: "Missing user data",
    });
  } else if (!user.name) {
    res.status(400).json({
      message: "Missing required name field",
    });
  } else if (!user.username) {
    res.status(400).json({
      message: "Missing required username field",
    });
  } else if (!user.password) {
    res.status(400).json({
      message: "Missing required password field",
    });
  } else {
    next();
  }
}

//food
function validFoodID(req, res, next) {
  Food.getByID(req.params.id)
    .then((food) => {
      if (food) {
        req.food = food;
        next();
      } else {
        res.status(400).json({
          message: "Invalid food ID",
        });
      }
    })
    .catch(next);
}

function validFood(req, res, next) {
  const food = req.body;
  if (!food) {
    res.status(400).json({
      message: "Missing food data",
    });
  } else if (!food.eventID) {
    res.status(400).json({
      message: "Missing required eventID field",
    });
  } else if (!food.name) {
    res.status(400).json({
      message: "Missing required name field",
    });
  } else if (!food.category) {
    res.status(400).json({
      message: "Missing required category field",
    });
  } else if (!food.quantity) {
    res.status(400).json({
      message: "Missing required quantity field",
    });
  } else {
    next();
  }
}
