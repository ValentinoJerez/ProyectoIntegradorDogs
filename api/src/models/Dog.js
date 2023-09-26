const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// defino el modelo
module.exports = (sequelize) => {
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,  //ID
      defaultValue: UUIDV4,
      allowNull : false,
      primaryKey: true,
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type:DataTypes.FLOAT,
      allowNull: false
    },
    life_span: {
      type: DataTypes.INTEGER, //Uso integer para almacenar el numero de años
      allowNull: false
    }
  }, {timestamps: false});
};
