const {DataTypes, UUIDV4} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('Temperaments', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        }
    })
};