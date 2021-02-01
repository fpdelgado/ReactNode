module.exports = app => {
    const filme = require("../controllers/filme.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Filme
    router.post("/", filme.create);

    // Retrieve all Filme
    router.get("/", filme.findAll);
  
    app.use('/filme', router);
  };