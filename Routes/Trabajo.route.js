const express = require('express');
const TrabajoService = require('../Controles/Trabajo.control')

const route = express.Router()

const service = new TrabajoService();

route.get('/', (req, res) => {
  const trabajo = service.find()
  res.json({
    trabajo
  })
})

route.get('/:Id', (req, res) => {
  const {Id} = req.params
  const trabajo = service.findOne(Id)
  res.json({
    trabajo
  })
})

module.exports = route
