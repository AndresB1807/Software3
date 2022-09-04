const express = require('express');
const CategoriaControl = require('../Controles/Categoria.control')

const route = express.Router()

const control = new CategoriaControl();

route.get('/', (req, res) => {
  const categorias = control.find()
  res.json({
    categorias
  })
})

module.exports = route
