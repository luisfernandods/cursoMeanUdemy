const server = require("./config/server");
require("./config/database")("localhost/cursoMeanUdemy");
require("./config/routes")(server);
