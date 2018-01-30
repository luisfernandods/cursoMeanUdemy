const express = require("express");
const router = express.Router();
const billingCycleService = require("../api/billingCycle/billingCycleService");
const billingCycleSumaryService = require("../api/billingSummary/billingSummaryService");

module.exports = function(server) {
  server.use("/api", router);

  //Aqui é definido as rotas no padrao REST para billingCylces de acordo com o nodeRest
  billingCycleService.register(router, "/billingCylces");

  router.route("/billingSumary").get(billingCycleSumaryService.getSumary);
};
