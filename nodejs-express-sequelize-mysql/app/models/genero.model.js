module.exports = (sequelize, Sequelize) => {
    const Genero = sequelize.define("genero", {
    idGenero: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      descricao: {
          type: Sequelize.STRING
      }
    }, { freezeTableName: true });
  
    return Genero;
  };