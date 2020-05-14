(function(){

    // PROMESAS

    const retirarDinero = ( montoRetirar:number ): Promise<number>=> {

        let dinero = 1000;

        return new Promise((success, error) => {

            if (montoRetirar > dinero ){
                error( 'No hay sufuciente dinero' );
            }else{
                dinero -= montoRetirar;
                success( dinero );
            }

        });

    }

    retirarDinero( 200 )
        .then( success => {
            console.log( success );
            retirarDinero( 9000 )
            .then( success => console.log( success ))
            .catch( error => console.log( error) );
        } )
        .catch( error => {
            console.log( error );
        });



})();
