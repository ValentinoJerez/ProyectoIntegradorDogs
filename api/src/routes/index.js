const { Router } = require('express');

const getDogs = require('../handlers/getDogs')
const getDogsById = require('../handlers/getDogsById');
const getDogsByName = require('../handlers/getDogsByName');
const createDogs = require('../handlers/createDog');
const getTemperaments = require('../handlers/getTemperaments')


const router = Router();

router.get("/dogs/name", getDogsByName);
router.get("/dogs/:idRaza", getDogsById);
router.post("/dogs", createDogs);
router.get("/dogs", getDogs);
router.get("/temperaments", getTemperaments);

module.exports = router;