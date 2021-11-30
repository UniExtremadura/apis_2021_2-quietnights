'use strict';

var utils = require('../utils/writer.js');
var Alfombra = require('../service/AlfombraService');

module.exports.addDatosAlfombra = function addDatosAlfombra (req, res, next, body, idUsuario) {
  Alfombra.addDatosAlfombra(body, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
