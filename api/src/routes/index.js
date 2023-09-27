const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// const getDogs = require('../handlers/getDogs')
const getDogsById = require('../handlers/getDogsById');
const getDogsByName = require('../handlers/getDogsByName');
const createDogs = require('../handlers/createDog');
const getTemperaments = require('../handlers/getTemperaments')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", getDogsByName)
router.get("/dogs/:idRaza", getDogsById);
// router.get(`/dogs/?name=${}`, getDogsByName); 
router.post("/dogs", createDogs);
router.get("/temperaments", getTemperaments);

module.exports = router;