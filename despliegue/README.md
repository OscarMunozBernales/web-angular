# Pasar a producción

1. Pre-produccion
```
dentro de la carpeta
ng build 
```
Con esta linea de comando, se va a generar una carpeta llamda dist (si es que no la configuraron para que se llamara de otra forma) dentro de esta carpeta vamos a tener nuestro proyecto en 'pre-produccion'.
Vamos a necesitar un host de pruebas para ver su contenido, existe un plugin de node que nos va a servir para esta situación, se llama [http-server](https://www.npmjs.com/package/http-server)
Para hacer correo el http-server, escribimos en la consola 

<pre>
    http-server -a localhost -p 2324
</pre>

