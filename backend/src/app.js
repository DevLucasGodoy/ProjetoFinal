const { response } = require('express');
const express = require('express');
const app = express();

app.get('/', (request, response) => response.status(200).send('API Projeto Final'));

module.exports = app;
