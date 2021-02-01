const db = require("../models");
const Filme = db.filme;
const Genero = db.genero;
//const Op = db.Sequelize.Op;


// Create and Save a new Filme
exports.create = (req, res) => {
    // Validate request
    if (!req.body.titulo) {
        res.status(400).send({
            message: "Informe o titulo do filme!"
        });
        return;
    }
  
    // Create a Filme
    const filme = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        dataLancamento: req.body.dataLancamento,
        faixaEtaria: req.body.faixaEtaria,
        idGenero: req.body.idGenero
    };
  
    // Save Filme in the database
    Filme.create(filme).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Filme."
        });
    });
};

// Retrieve all Filme from the database.
exports.findAll = (req, res) => {
    //const title = req.query.title;
    //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Filme.hasMany(Genero, {foreignKey: 'idGenero', as: "genero"})
    //Genero.belongsTo(Filme, {foreignKey: 'descricao'})

    Filme.findAll({
        raw: true,
        attributes: [
            'idFilme', 
            ['titulo', 'tituloFilme'],
            'descricao'
        ], //id, first AS firstName
        include: [{
            model: Genero,
            as: "genero",
            attributes: [
                'descricao'
            ]
        }]
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving filmes."
        });
      });
  };