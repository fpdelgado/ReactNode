module.exports = app => {
    const genero = require("../controllers/genero.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Genero
    router.post("/", genero.create);

    // Retrieve all Genero
    router.get("/", genero.findAll);
  
    app.use('/filme/genero', router);
  };