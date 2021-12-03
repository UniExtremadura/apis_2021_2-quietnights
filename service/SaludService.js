'use strict';


/**
 * para guardar los datos de frecuencia cardíaca de un usuario
 * Se incluyen sus datos en el sistema y se devuelve el objeto creado, incluído su id
 *
 * body DatosFrecuencia Datos del sensor de Frecuencia carcíaca a insertar (optional)
 * idUsuario BigDecimal Id del Usuario
 * returns List
 **/
exports.addDatosFrecuencia = function(body,idUsuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tiempo" : "25-04-2021 22:10:36",
  "idUsuario" : 1,
  "datoFrecuencia" : 78
}, {
  "tiempo" : "25-04-2021 22:10:36",
  "idUsuario" : 1,
  "datoFrecuencia" : 78
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * para guardar los datos de oxígeno en sangre de un usuario
 * Se incluyen sus datos en el sistema y se devuelve el objeto creado, incluído su id
 *
 * body DatosOxigeno Datos del sensor de Oxígeno en sangre a insertar (optional)
 * idUsuario BigDecimal Id del Usuario
 * returns List
 **/
exports.addDatosOxigeno = function(body,idUsuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tiempo" : "25-04-2021 22:10:36",
  "idUsuario" : 1,
  "datoOxigeno" : 98
}, {
  "tiempo" : "25-04-2021 22:10:36",
  "idUsuario" : 1,
  "datoOxigeno" : 98
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * para guardar los datos de temperatura de un usuario
 * Se incluyen sus datos en el sistema y se devuelve el objeto creado, incluído su id
 *
 * body DatosTemperatura Datos del sensor de Temperatura a insertar (optional)
 * idUsuario BigDecimal Id del Usuario
 * returns List
 **/
exports.addDatosTemperatura = function(body,idUsuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "datoTemperatura" : 36.6,
  "tiempo" : "25-04-2021 22:10:36",
  "idUsuario" : 1
}, {
  "datoTemperatura" : 36.6,
  "tiempo" : "25-04-2021 22:10:36",
  "idUsuario" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

