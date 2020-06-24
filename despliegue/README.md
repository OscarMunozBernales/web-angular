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

2. A producción
Antes de ejecutar una linea de comandos tenemos que ir al archivo environments.ts en 'src/environments/environments.ts' y cambiar la siguiente linea
```ts
export const environment = {
  production: false // cambiarla por true
};

```

```ts
// archivo de rutas

@NgModulo({
    imports: [
        RouterModule.forRoot( routes, { useHash: true }) // useHash: true, nos va a señalar que al momento de mandar a prod no nos movamos de la carpeta raiz
    ]
})
```

```html
<!-- index.hmtl -->
<head>
    <meta charset="utf-8">
    <title>Despliegue</title>
    <base href=""> <!-- le vamos a quitar el / para que use el path relativo -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
```

Luego en la terminal escribimos:
```
dentro de la carpeta
ng build --prod 
```

Y nuestro proyecto va a pasar a producción.

