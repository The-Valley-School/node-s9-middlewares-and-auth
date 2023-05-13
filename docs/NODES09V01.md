# VIDEO 01 - Middlewares de aplicación

En Express, un middleware es una función que tiene acceso al objeto de solicitud (req), al objeto de respuesta (res) y al siguiente middleware en la cadena de middleware, que es comúnmente referido como next(). Los middlewares pueden ser utilizados para realizar tareas tales como validar datos de entrada, autenticar usuarios, manejar errores y mucho más.

En términos simples, los middlewares actúan como un puente entre la solicitud del cliente y la respuesta del servidor. Cada vez que se recibe una solicitud en una aplicación Express, la solicitud pasa a través de una serie de middlewares, uno tras otro, antes de llegar a la ruta final. Cada middleware puede realizar una tarea específica y luego pasar la solicitud al siguiente middleware utilizando next(). Si un middleware no llama a next(), la solicitud no avanzará a los middlewares restantes en la cadena.

Para utilizar un middleware en Express, se utiliza el método use() en la instancia de la aplicación, pasando la función middleware como argumento.

En concreto hemos realizado los siguientes middlewares de aplicación:

```javascript
// Middlewares de aplicación, por ejemplo middleware de logs en consola
app.use((req, res, next) => {
  const date = new Date();
  console.log(`Petición de tipo ${req.method} a la url ${req.originalUrl} el ${date}`);
  next();
});

// Acepta /car/*
app.use("/car", (req, res, next) => {
  console.log("Me han pedido coches!!");
  next();
});
```
