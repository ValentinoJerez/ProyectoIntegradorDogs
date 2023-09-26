//Import
const getDogsId = require ("../controllers/getDogsById")

const getDogsById = async (req, res) => {
    try {
        const {idRaza} = req.params;
        const dog = await getDogsId(idRaza);
        res.status(200).json(dog)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getDogsById;