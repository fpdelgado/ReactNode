module.exports = (sequelize, Sequelize) => {
    const Filme = sequelize.define("filme", {
      idFilme: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },      
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      dataLancamento: {
        type: Sequelize.DATEONLY
      },
      faixaEtaria: {
        type: Sequelize.STRING
      },
      idGenero: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'genero',
            key: 'idGenero'
          }
      }
    }, { freezeTableName: true });
  
    return Filme;
  };