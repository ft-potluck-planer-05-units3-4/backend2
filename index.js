const server = require("./api/server");

const port = process.env.PORT || 2000;

server.listen(2000, () => {
  console.log(`\n Listening on port ${2000} \n`);
});
