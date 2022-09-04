const db = require('./Conection.service')
const DataTypes = require('sequelize')

const Trabajo = db.define('trabajo', {
  Id: {
    type: DataTypes.INTEGER
  },
  Nombre: {
    type: DataTypes.STRING
  },
  Descripcion: {
    type: DataTypes.STRING
  },
  Fecha_Limite: {
    type: DataTypes.DATE
  },
  Fecha_Creacion: {
    type: DataTypes.DATE
  },
  Estado: {
    type: DataTypes.INTEGER
  },
  categoria_Id: {
    type: DataTypes.INTEGER
  },
  ciudad_Id: {
    type: DataTypes.INTEGER
  }
})

module.exports = Trabajo
