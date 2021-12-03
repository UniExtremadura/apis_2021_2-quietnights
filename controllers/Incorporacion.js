'use strict';

var utils = require('../utils/writer.js');
var Incorporacion = require('../service/IncorporacionService');

module.exports.addDatosIncorporacion = function addDatosIncorporacion (req, res, next, body, idUsuario) {
  Incorporacion.addDatosIncorporacion(body, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
