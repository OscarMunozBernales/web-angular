"use strict";
(function () {
    var avenger = {
        nombre: 'Peter',
        poder: 'Poderes aracnidos',
        clave: 'Spiderman'
    };
    // DESESTRUCTURACION
    var nombre = avenger.nombre, poder = avenger.poder, clave = avenger.clave;
    console.log(nombre);
    console.log(poder);
    console.log(clave);
    // DESESTRUCTURACION EN UNA FUNCION
    var extraer = function (_a) {
        var nombre = _a.nombre, clave = _a.clave;
        console.log(nombre);
        console.log(clave);
    };
    extraer(avenger);
    // EXTRAER ELEMENTOS DESDE UN ARREGLO
    var avengers = ['Thor', 'IronMan', 'SpiderMan'];
    var martillo = avengers[0], sexboy = avengers[1], arana = avengers[2];
    console.log(martillo);
    console.log(sexboy);
    console.log(arana);
    var posicion3 = avengers[2]; // ESTO QUIERE DECIR QUE NO NOS INTERESA LA POS 1 Y 2 PERO SI LA 3
    console.log(posicion3);
    var extraerArr = function (_a) {
        var thor = _a[0], ironman = _a[1], spiderman = _a[2];
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    extraerArr(avengers);
})();
