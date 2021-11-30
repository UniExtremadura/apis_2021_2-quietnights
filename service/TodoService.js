'use strict';


/**
 * para extraer la información de todos los sensores de un usuario en un periodo de tiempo concreto
 * Indicando idUsuario se extraen los datos de todos los sensores en un periodo de tiempo concreto entre tiempo1 y tiempo2
 *
 * idUsuario BigDecimal Id del Usuario
 * tiempo1 String identificación del tiempo inicial del periodo a buscar
 * tiempo2 String identificación del tiempo final del periodo a buscar
 * returns List
 **/
exports.getTodoSensoresP = function(idUsuario,tiempo1,tiempo2) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tiempoPosicion" : "25-04-2021 22:10:36",
  "tiempoPresion" : "25-04-2021 22:10:36",
  "datosTemperatura" : 36.6,
  "datoPosicion" : 0,
  "idUsuario" : 1,
  "datoFrecuencia" : 75,
  "tiempoFrecuencia" : "25-04-2021 22:10:36",
  "tiempoTemperatura" : "25-04-2021 22:10:36",
  "tiempoOxigeno" : "25-04-2021 22:10:36",
  "datoPresion" : 2000,
  "datoOxigeno" : 98
}, {
  "tiempoPosicion" : "25-04-2021 22:10:36",
  "tiempoPresion" : "25-04-2021 22:10:36",
  "datosTemperatura" : 36.6,
  "datoPosicion" : 0,
  "idUsuario" : 1,
  "datoFrecuencia" : 75,
  "tiempoFrecuencia" : "25-04-2021 22:10:36",
  "tiempoTemperatura" : "25-04-2021 22:10:36",
  "tiempoOxigeno" : "25-04-2021 22:10:36",
  "datoPresion" : 2000,
  "datoOxigeno" : 98
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

