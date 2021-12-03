'use strict';


/**
 * para guardar los datos de incorporación de un usuario
 * Se incluyen sus datos en el sistema y se devuelve el objeto creado, incluído su id
 *
 * body DatosIncorporacion Datos del sensor de posición a insertar (optional)
 * idUsuario BigDecimal Id del Usuario
 * returns List
 **/
exports.addDatosIncorporacion = function(body,idUsuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tiempo" : "25-04-2021 22:10:36",
  "datoPosicion" : 0,
  "idUsuario" : 1
}, {
  "tiempo" : "25-04-2021 22:10:36",
  "datoPosicion" : 0,
  "idUsuario" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

