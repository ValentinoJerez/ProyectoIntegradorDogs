//Import 
const getDogsName = require("../controllers/getDogsByName")

const getDogsByName = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getDogsByName; 