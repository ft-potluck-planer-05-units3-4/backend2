const config = require("../Secrets/secret.js");
const jwt = require("jsonwebtoken");

module.exports = function generateToken(user) {
  const payload = {
    subject: user.id,
    name: user.name,
    username: user.username,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, config.jwtSecret, options);
};
