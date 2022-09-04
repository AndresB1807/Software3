const express = require('express')
const categoriaRoute = require('./Categoria.route')
const ciudadRoute = require('./Ciudad.route')
const trabajoRoute = require('./Trabajo.route')

let routerApi = (app) => {
  const router = express.Router();
  app.use('/v1', router)
  router.use('/categoria', categoriaRoute)
  router.use('/ciudad', ciudadRoute)
  router.use('/trabajo', trabajoRoute)
}

module.exports = routerApi
