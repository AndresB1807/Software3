const express = require('express');
const TrabajoService = require('../Controles/Trabajo.control')

const route = express.Router()

const service = new TrabajoService();

route.get('/', async(req, res) => {
  const trabajo = await service.find()
  res.json({
    trabajo
  })
})

route.get('/:Id', async(req, res) => {
  const {Id} = req.params
  const trabajo = await service.findOne(Id)
  res.json({
    trabajo
  })
})

route.post('/', async(req, res) => {
  console.log(req.body)
  const data = req.body;
  const nuevoTrabajo = await service.create(data);
  res.json(nuevoTrabajo)
})

route.patch('/:id', async(req, res) => {
  const{id} = req.params;
  const body = req.body;
  const trabajo = await service.update(id, body)
  res.json(trabajo)
})

route.delete('/:id', async(req, res) => {
  const {id} = req.params;
  const rta = service.delete(id)
  res.status(200).json(rta)
})

module.exports = route
