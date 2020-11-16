const { Router } = require('express');
const data = require("../data/data.js");

const home = Router();

home.get('/', (request, response) => {
  response.send({
    success: true
  })
});

 module.exports = home;
