//Importaciones
const create = require("../controllers/createDog")

const createDog = async (req, res) => {
    try {
       const {name, weight, height, life_span, temperaments} = req.body;
        const dog = await create(name, weight, height, life_span, temperaments)
       res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = createDog;