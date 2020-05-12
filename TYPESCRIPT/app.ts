(() => {

    function saludar( nombre:string ){
        console.log( nombre );
    }
    
    const wolverine = {
        nombre: 'Logan'
    };
    
    
    saludar( wolverine.nombre );
})();
