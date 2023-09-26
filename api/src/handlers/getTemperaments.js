//Import 
const Temperament = require("../controllers/getTemperaments")

const getTemperaments = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getTemperaments;