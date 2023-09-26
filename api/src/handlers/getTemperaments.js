//Import 
const temperaments = require("../controllers/getTemperaments")

const getTemperaments = async (req, res) => {
    try {
        const dog = await temperaments();
        res.status(200).json(dog)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getTemperaments;