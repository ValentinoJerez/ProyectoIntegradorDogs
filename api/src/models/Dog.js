const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// defino el modelo
module.exports = (sequelize) => {
  sequelize.define('Dog', {
    id: {
      type: DataTypes.UUID,  //ID
      defaultValue: DataTypes.UUIDV4,
      allowNull : false,
      primaryKey: true,
    },
    reference_image_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    weight: {
      type:DataTypes.STRING,
      allowNull: false
    },
    life_span: {
      type: DataTypes.STRING, //Uso integer para almacenar el numero de años
      allowNull: false
    }
  }, {timestamps: false});
};
