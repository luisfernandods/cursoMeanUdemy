const _ = require("lodash");
const BillingCycle = require("../billingCycle/billingCycle");

function getSumary(req, res, next) {
  BillingCycle.aggregate([
    {
      $project: {
        credit: { $sum: "$credits.value" },
        debt: { $sum: "$debts.value" }
      }
    },
    {
      $group: {
        _id: null,
        credit: { $sum: "$credit" },
        debt: { $sum: "$debt" }
      }
    },
    {
      $project: { _id: 0, credit: 1, debt: 1 }
    }
  ])
    .then(function(result) {
      res.json(_.defaults(result[0], { credit: 0, debt: 0 }));
    })
    .catch(function(error) {
      res.status(500).json({ erors: [error] });
    });
}

module.exports = { getSumary };
