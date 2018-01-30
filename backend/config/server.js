const porta = 3000;
const bodyParser = require("body-parser");
const express = require("express");
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(porta, function() {
  console.log(`O servidor iniciou na porta ${porta}`);
});

module.exports = server;
