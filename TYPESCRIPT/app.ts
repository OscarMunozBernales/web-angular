(function(){

    const avenger = {
        nombre  : 'Peter',
        poder   : 'Poderes aracnidos',
        clave   : 'Spiderman'
    };

    // DESESTRUCTURACION

    const { nombre , poder, clave } = avenger;
    console.log( nombre );
    console.log( poder );
    console.log( clave );

    // DESESTRUCTURACION EN UNA FUNCION

    const extraer = ( {nombre, clave} : any ) => {
        console.log( nombre );
        console.log( clave );
    }

    extraer( avenger );

    // EXTRAER ELEMENTOS DESDE UN ARREGLO

    const avengers:string[] = ['Thor', 'IronMan', 'SpiderMan'];

    const [ martillo, sexboy, arana ] = avengers;

    console.log( martillo );
    console.log( sexboy );
    console.log( arana );

    const [ , , posicion3 ] = avengers; // ESTO QUIERE DECIR QUE NO NOS INTERESA LA POS 1 Y 2 PERO SI LA 3

    console.log( posicion3 );

    const extraerArr = ( [ thor, ironman, spiderman ]: string[] ) => {
        console.log( thor );
        console.log( ironman );
        console.log( spiderman );
    }

    extraerArr( avengers );



})();
