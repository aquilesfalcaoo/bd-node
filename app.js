const Sequelize = require("sequelize");

const connection = new Sequelize("db_demo", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

//* Realizando a Conexão
const conexao = connection
  .authenticate()
  .then(function () {
    console.log("Conexão realizada com sucesso!");
  })
  .catch(function (err) {
    console.log("Não foi possível se conectar!");
  })
  .done();

//* Criando a Tabela no Banco de Dados
const Diagramas = connection.define("diagramas", {
  nome: Sequelize.STRING,
  disciplina: Sequelize.STRING,
});

//? Evita de Criar novas Tabelas no Banco de Dados ao Executar
// connection.sync().then(function () {
//   Diagramas.create({
//     nome: "Aquiles Falcão",
//     disciplina: "Matemática",
//   });
// });

//! Método findAll
connection.sync().then(function () {
  const diagramas = Diagramas.findAll().then(function (diagramas) {
    console.log(
      "===================================================================================================================="
    );
    console.log("Quantidade: " + diagramas.length);
    diagramas.forEach((element) => {
      console.log(element.nome + " - " + element.disciplina);
    });
    console.log(diagramas[0]);
  });
});

//! Método findOne
console.log(
  "===================================================================================================================="
);
connection.sync().then(function () {
  Diagramas.findOne({ where: { nome: "Arthur Trajano" } }).then(function (
    diagramas
  ) {
    console.log(
      "Nome: " + diagramas.nome + " - Disciplina: " + diagramas.disciplina
    );
  });
});
