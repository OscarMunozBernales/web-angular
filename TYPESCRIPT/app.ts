(function(){

    const sumar = ( numero1:number, numero2:number ) => {
        return numero1 + numero2;
    }

    const nombre    = 'Oscar';
    const apellido  = 'Muñoz';
    const edad      = 28;

    const salida = `${ nombre } ${ apellido }, ${ edad } años de edad`;

    console.log( salida );
    console.log( `${ sumar(30, 12) }`);

})();
