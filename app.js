const Sequelize = require("sequelize");

const connection = new Sequelize("db_demo", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

const Artigos = connection.define("artigos", {
  titulo: Sequelize.STRING,
  assunto: Sequelize.TEXT,
});

connection.sync().then(function () {
  Artigos.create({
    titulo: "Testando o Sequelize",
    assunto: "Neste artigo iremos testar os recursos do Sequelize",
  });
});

connection.sync().then(function () {
  Artigos.findAll().then(function (artigos) {
    console.log(artigos.dataValues);
  });
});
