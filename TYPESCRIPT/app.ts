(function(){

    // PROMESAS

    console.log('INicio');

    const prom1 = new Promise(( resolve, reject ) => {

        setTimeout( () => {
            resolve('Se temrino el timeOut');
        }, 1000);

    
    });


    prom1.then( mensaje => console.log(`El mensaje es ${ mensaje }`))

    console.log( 'Fin' );



})();
