const express = require('express');
const router = express.Router();
const Controller = require('./controllers/Controllers');

router.get('/', (req, res) => res.status(200).send('API Projeto Final'));
router.get('/produtos', Controller.getAll);

module.exports = router;