const express = require("express");
const router = express.Router();
const Events = require("./events-model");
const Users = require("../users/users-model");
const restricted = require("../middleware/restricted-middleware");
const { validEventID, validNewEvent } = require("../middleware/middleware");

router.use(restricted);

//bringing in /api/events
router.get("/users/:id", validEventID, (req, res, next) => {
  const id = req.params.id;
  Promise.all([
    Events.getUserID(id),
    Users.getInvited(id),
    Events.getFoodList(id),
  ])
    .then(([organizedEvents, guestEvents, list]) => {
      res.status(200).json({ organizedEvents, guestEvents, menu: list });
    })
    .catch(next);
});

router.get("/", (req, res) => {
  Events.get().then((events) => {
    res.status(200).json(events);
  });
});

router.get("/:id", validEventID, (req, res, next) => {
  const id = req.params.id;
  Events.getByID(id)
    .then((event) => {
      res.status(200).json(event);
    })
    .catch(next);
});

router.post("/", validNewEvent, (req, res, next) => {
  const newEvent = req.body;
  Events.add(newEvent)
    .then((event) => {
      res.status(201).json({
        message: `Event created`,
        event,
        id: event.id,
      });
    })
    .catch(next);
});

router.put("/:id", validEventID, validNewEvent, (req, res, next) => {
  const id = req.params.id;
  const changes = req.body;
  Events.update(id, changes)
    .then((change) => {
      if (change === 1) {
        Events.getByID(id).then((success) => {
          res.status(200).json({
            message: `Event updated`,
            success,
          });
        });
      }
    })
    .catch(next);
});

router.delete("/:id", validEventID, (req, res, next) => {
  const id = req.params.id;
  Events.remove(id)
    .then((event) => {
      if (event) {
        res.status(200).json({
          message: "Event deleted",
        });
      }
    })
    .catch(next);
});
//GET /events/:id/food
router.get("/:id/food", (req, res, next) => {
  const id = req.params.id;
  Events.getFoodList(id)
    .then((list) => {
      res.status(200).json(list);
    })
    .catch(next);
});

//GET /events/:id/invited
router.get("/:id/guests", validEventID, (req, res, next) => {
  const id = req.params.id;
  Events.getInvited(id)
    .then((friend) => {
      res.status(200).json(friend);
    })
    .catch(next);
});

//POST /events/:id/invited
router.post("/:id/guests", validEventID, (req, res, next) => {
  const id = req.params.id;
  const invite = { eventsID: id, userID: req.body.userID };
  Events.addInvited(id, invite)
    .then((user) => {
      res.status(201).json({
        message: "User was added to events",
        user,
      });
    })
    .catch(next);
});

module.exports = router;
