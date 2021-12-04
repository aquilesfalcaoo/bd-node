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
const Artigos = connection.define("artigos", {
  titulo: Sequelize.STRING,
  assunto: Sequelize.TEXT,
});

//? Evita de Criar novas Tabelas no Banco de Dados ao Executar
// connection.sync().then(function () {
//   Artigos.create({
//     titulo: "Manipulando Sequelize",
//     assunto: "Manipulação de Objetos no Sequelize",
//   });
// });

//! Método findAll
connection.sync().then(function () {
  const artigos = Artigos.findAll().then(function (artigos) {
    console.log(
      "===================================================================================================================="
    );
    console.log("Quantidade: " + artigos.length);
    artigos.forEach((element) => {
      console.log(element.titulo + " - " + element.assunto);
    });
    console.log(artigos[0]);
  });
});

//! Método findOne
console.log(
  "===================================================================================================================="
);
connection.sync().then(function () {
  Artigos.findOne({ where: { titulo: "manipulando Sequelize" } }).then(
    function (artigo) {
      console.log("Título: " + artigo.titulo + " - Assunto: " + artigo.assunto);
    }
  );
});
