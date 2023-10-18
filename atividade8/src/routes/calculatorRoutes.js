const express = require('express');
const router = express.Router();

const calculadoraController = require('../controller/calculatorController');

router.get('/', calculadoraController.indexCalculadora);
router.post("/calcular", calculadoraController.calcular);

module.exports = router;