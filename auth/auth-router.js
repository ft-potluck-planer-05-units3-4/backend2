const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const Auth = require("./auth-model");
const { isValidReg, isValidLogin } = require("../middleware/middleware");
const generateToken = require("./generateToken");

//bringing in /auth
router.post("/register", (req, res, next) => {
  const creds = req.body;

  if (isValidReg(creds)) {
    const rounds = process.env.BCRYPT_ROUNDS || 10;
    const hash = bcrypt.hashSync(creds.password, rounds);
    creds.password = hash;

    Auth.add(creds)
      .then((user) => {
        res.status(201).json({
          message: "User created",
          user,
        });
      })
      .catch(next);
  } else {
    res.status(400).json({
      message: "Please provide valid name, username and password.",
    });
  }
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  if (isValidLogin(req.body)) {
    Auth.findBy({ username: username })
      .then(([user]) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);

          res.status(200).json({
            id: `${user.id}`,
            user: `${user.name}`,
            token: token,
          });
        } else {
          res.status(401).json({
            message: "Invalid username or password",
          });
        }
      })
      .catch(next);
  } else {
    res.status(401).json({
      message: "Please provide valid username and password.",
    });
  }
});

module.exports = router;
