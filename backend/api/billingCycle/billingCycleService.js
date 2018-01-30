const BillingCycle = require("./billingCycle");
const _ = require("lodash");

// Aqui o node-restful define as rotas e querys para o modelo
// por default ele terá
// get  = /api/billingCylces  retorna todos os registros
// get  = /api/billingCylces/:id  retorna o registro por id
// post  = /api/billingCylces  salva um resgistro passando o objeto no body
// put  = /api/billingCylces/:id  da update passando o id no params e objeto no body
// delete  = /api/billingCylces/:id  deleta o registro passando o id no params
BillingCycle.methods(["get", "post", "put", "delete"]);

BillingCycle.after("post", sendErrorsOrNext).after("put", sendErrorsOrNext);

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle;
  if (bundle.errors) {
    var errors = parseErrors(bundle.errors);
    res.status(500).json({ errors });
  } else {
    next();
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = [];
  _.forIn(nodeRestfulErrors, error => errors.push(error.message));
  return errors;
}

// A opção "NEW" faz com que o retorno do update seja o novo objeto nao o objeto que foi alterado
// Igual ao sequelize
// A opção 'runValidators' faz com que as validações de cadastro rodem para update também
BillingCycle.updateOptions({ new: true, runValidators: true });

BillingCycle.route("count", function(req, res, next) {
  //   BillingCycle.count(function(error, value) {
  //     if (error) {
  //       res.status(500).json({ errors: [error] });
  //     } else {
  //       res.json({ value });
  //     }
  //   });

  return BillingCycle.count()
    .then(function(result) {
      res.json({ result });
    })
    .catch(function(error) {
      res.status(500).json({ erors: [error] });
    });
});

module.exports = BillingCycle;
