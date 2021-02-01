const db = require("../models");
const Genero = db.genero;
//const Op = db.Sequelize.Op;


// Create and Save a new Genero
exports.create = (req, res) => {
    // Validate request
    if (!req.body.descricao) {
        res.status(400).send({
            message: "Informe a descrição para o genero!"
        });
        return;
    }
  
    // Create a Genero
    const genero = {
        descricao: req.body.descricao
    };
  
    // Save Genero in the database
    Genero.create(genero).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Genero."
        });
    });
};

// Retrieve all Generos from the database.
exports.findAll = (req, res) => {
    //const title = req.query.title;
    //var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Genero.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving generos."
        });
      });
  };