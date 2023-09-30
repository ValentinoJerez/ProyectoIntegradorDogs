//Crear const para importar rutas
// ("/dogs/name", getDogsByName);
// ("/dogs/:idRaza", getDogsById);
// ("/dogs", createDogs);
// ("/dogs", getDogs);
// ("/temperaments", getTemperaments);

const getDogs = require("../controllers/getDogs");
const getDogsById = require("../controllers/getDogsById");
const getDogsByName = require("../controllers/getDogsByName");
const createDogs = require("../controllers/createDogs");
const getTemperaments = require('../controllers/getTemperament');

module.exports = { getDogs, getDogsById, getDogsByName, getTemperaments, createDogs }