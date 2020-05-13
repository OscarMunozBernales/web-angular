"use strict";
(function () {
    var sumar = function (numero1, numero2) {
        return numero1 + numero2;
    };
    var nombre = 'Oscar';
    var apellido = 'Muñoz';
    var edad = 28;
    var salida = nombre + " " + apellido + ", " + edad + " a\u00F1os de edad";
    console.log(salida);
    console.log("" + sumar(30, 12));
})();
