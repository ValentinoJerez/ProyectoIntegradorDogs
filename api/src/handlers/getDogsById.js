//Import
const getDogsId = require ("../controllers/getDogsById")

const getDogsById = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getDogsById;