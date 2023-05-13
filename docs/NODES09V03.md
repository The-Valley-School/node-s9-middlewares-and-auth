# VIDEO 03 - Middleware de errores

En este vídeo hemos realizado un middleware que registra todos los errores que suceden en la app:

```javascript
// Middleware de gestión de errores
app.use((err, req, res, next) => {
  console.log("*** INICIO DE ERROR ***");
  console.log(`PETICIÓN FALLIDA: ${req.method} a la url ${req.originalUrl}`);
  console.log(err);
  console.log("*** FIN DE ERROR ***");

  if (err?.name === "ValidationError") {
    res.status(400).json(err);
  } else {
    res.status(500).json(err);
  }
});
```

Este middleware se ejecutará cuando ocurra un error en algún lugar de la cadena de middlewares y capturará el error para que no se interrumpa la ejecución de la aplicación. El middleware imprimirá información de registro en la consola para ayudar en la depuración y luego enviará una respuesta JSON al cliente con un código de estado HTTP apropiado.

Para que el middleware reciba errores es necesario que desde nuestras funciones invoquemos next(error), por ejemplo:

```javascript
// CRUD: READ
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const car = await Car.findById(id).populate(["owner", "brand"]);
    if (car) {
      res.json(car);
    } else {
      res.status(404).json({});
    }
  } catch (error) {
    next(error);
  }
});
```
