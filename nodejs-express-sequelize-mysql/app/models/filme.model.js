module.exports = (sequelize, Sequelize) => {
    const Filme = sequelize.define("filme", {
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      dataLancamento: {
        type: Sequelize.DATEONLY
      },
      genero: {
          type: Sequelize.STRING
      }
    });
  
    return Filme;
  };