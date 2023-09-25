const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getDogs = require('../controllers/getDogs')
const getDogsById = require('../controllers/getDogsById');
const getDogsByName = require('../controllers/getDogsByName');
const createDogs = require('../controllers/createDog');
const getTemperaments = require('../controllers/getTemperaments')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", getDogs)
router.get("/dogs:idRaza", getDogsById);
router.get("/dogs/name?=", getDogsByName);
router.post("/dogs", createDogs);
router.get("/temperaments", getTemperaments);

module.exports = router;
