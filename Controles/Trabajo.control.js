const Trabajo = require('../Services/Trabajo.service');

class TrabajoControl {
   find() {
    return Trabajo.findAll();
  }

  findOne(Id) {
    return Trabajo.findByPk(Id);
  }

  create(data){
    const nuevoTrabajo = Trabajo.create({
      data
    })
    return nuevoTrabajo
  }
}

module.exports = TrabajoControl
