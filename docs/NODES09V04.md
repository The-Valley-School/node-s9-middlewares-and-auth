# VIDEO 04 - Middleware de estáticos

En este vídeo hemos visto el middleware de estáticos que incluye express, para usarlo basta con indicar en qué ruta va a estar y qué carpeta debe leer:

```javascript
app.use("/public", express.static("public"));
```

Esto nos permite devolver en la ruta /public todos los ficheros que se encuentran en esa carpeta.

Docu oficial:

<https://expressjs.com/es/starter/static-files.html>
