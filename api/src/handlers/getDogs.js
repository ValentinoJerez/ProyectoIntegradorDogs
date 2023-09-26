//Importaciones
const get = require("../controllers/getDogs")

const getDogs = async (req, res) => {
    try {
        const dogs = await get()
        res.status(200).json(dogs)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getDogs;