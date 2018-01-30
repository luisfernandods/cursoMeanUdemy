const mongoose = require("mongoose");

module.exports = function(uri) {
  mongoose
    .connect("mongodb://" + uri)
    .then(function() {
      console.log("Conectado ao Banco de dados");
    })
    .catch(function(error) {
      console.log("Erro ao conectar com o banco de dados: " + error.message);
    });
};

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório";
mongoose.Error.messages.Number.min =
  "O valor '{VALUE}' é menor que o limite de '{MIN}'.";
mongoose.Error.messages.Number.max =
  "O valor '{VALUE}' é maior que o limite de '{MAX}'.";
mongoose.Error.messages.String.enum =
  "'{VALUE}' não é válido para o atributo '{PATH}'.";
