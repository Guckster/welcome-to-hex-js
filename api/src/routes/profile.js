const { Router } = require('express');
const data = require("../data/data.js");

const profile = Router();

profile.get('/', (request, response) => {
  response.status(200).send(data)
});

 module.exports = profile;
