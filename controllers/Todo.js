'use strict';

var utils = require('../utils/writer.js');
var Todo = require('../service/TodoService');

module.exports.getTodoSensoresP = function getTodoSensoresP (req, res, next, idUsuario, tiempo1, tiempo2) {
  Todo.getTodoSensoresP(idUsuario, tiempo1, tiempo2)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
