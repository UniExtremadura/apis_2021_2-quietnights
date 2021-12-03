'use strict';

var utils = require('../utils/writer.js');
var Salud = require('../service/SaludService');

module.exports.addDatosFrecuencia = function addDatosFrecuencia (req, res, next, body, idUsuario) {
  Salud.addDatosFrecuencia(body, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addDatosOxigeno = function addDatosOxigeno (req, res, next, body, idUsuario) {
  Salud.addDatosOxigeno(body, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addDatosTemperatura = function addDatosTemperatura (req, res, next, body, idUsuario) {
  Salud.addDatosTemperatura(body, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
