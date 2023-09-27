//Import 
const getDogsName = require("../controllers/getDogsByName")

const getDogsByName = async (req, res) => {
    try {
        const {name} = req.query;
        console.log(name)
        const dog = await getDogsName(name);
        res.status(200).json(dog)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getDogsByName; 