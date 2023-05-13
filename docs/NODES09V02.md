# VIDEO 02 - Middleware de rutas

En este vídeo hemos visto cómo podemos crear middlewares que funcionen a nivel de router.

Por ejemplo, hemos añadido un middleware en /car que revisa los parámetros de paginado antes de que ejecutemos la paginación:

```javascript
// CRUD: READ
router.get("/", (req, res, next) => {
  console.log("Estamos en el middleware /car que comprueba parámetros");

  const page = req.query.page ? parseInt(req.query.page) : 1;
  const limit = req.query.limit ? parseInt(req.query.limit) : 10;

  if (!isNaN(page) && !isNaN(limit) && page > 0 && limit > 0) {
    req.query.page = page;
    req.query.limit = limit;
    next();
  } else {
    console.log("Parámetros no válidos:");
    console.log(JSON.stringify(req.query));
    res.status(400).json({ error: "Params page or limit are not valid" });
  }
});

router.get("/", async (req, res) => {
  try {
    // Asi leemos query params
    const { page, limit } = req.query;
    const cars = await Car.find()
      .limit(limit)
      .skip((page - 1) * limit)
      .populate(["owner", "brand"]);

    // Num total de elementos
    const totalElements = await Car.countDocuments();

    const response = {
      totalItems: totalElements,
      totalPages: Math.ceil(totalElements / limit),
      currentPage: page,
      data: cars,
    };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
});
```
