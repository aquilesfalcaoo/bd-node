'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diagramas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Diagramas.init({
    nome: DataTypes.STRING,
    disciplina: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diagramas',
  });
  return Diagramas;
};