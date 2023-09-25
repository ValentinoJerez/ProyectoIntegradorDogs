const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID, //ID
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
    altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peso: {
      type:DataTypes.FLOAT,
      allowNull: false
    },
    edad: {
      type: DataTypes.INTEGER, //Uso integer para almacenar el numero de años
      allowNull: false
    }
  });
};
