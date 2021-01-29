module.exports = (sequelize, Sequelize) => {
    const Genero = sequelize.define("genero", {
      idGereno: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      descricao: {
          type: Sequelize.STRING
      }
    });
  
    return Genero;
  };