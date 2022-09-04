const Ciudad = require('../Services/Ciudad.service');

class CiudadControl {
   find() {
    return Ciudad.findAll();
  }
}

module.exports = CiudadControl
