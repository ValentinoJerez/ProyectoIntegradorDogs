//Importaciones
const create = require("../controllers/createDog")

const createDog = async (req, res) => {
    try {
       const {name, reference_image_id, weight, height, life_span} = req.body;
        const dog = await create(name, reference_image_id, weight, height, life_span)
       res.status(200).json(dog);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = createDog;