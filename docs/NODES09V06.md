# VIDEO 06 - Ficheros en colecciones de mongo

En este fichero hemos añadido un endpoint para poder asociar imágenes a nuestras marcas de coches:

```javascript
router.post("/logo-upload", upload.single("logo"), async (req, res, next) => {
  try {
    // Renombrado de la imagen
    const originalname = req.file.originalname;
    const path = req.file.path;
    const newPath = path + "_" + originalname;
    fs.renameSync(path, newPath);

    // Busqueda de la marca
    const brandId = req.body.brandId;
    const brand = await Brand.findById(brandId);

    if (brand) {
      brand.logoImage = newPath;
      await brand.save();
      res.json(brand);

      console.log("Marca modificada correctamente!");
    } else {
      fs.unlinkSync(newPath);
      res.status(404).send("Marca no encontrada");
    }
  } catch (error) {
    next(error);
  }
});
```

Para ello hemos tenido que modificar el modelo Brand y añadir un campo logoImage:

```javascript
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const allowedCountries = ["SPAIN", "ITALY", "USA", "GERMANY", "JAPAN", "FRANCE"];
const currentYear = new Date().getFullYear();

const brandSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "Hijo mío... dame algo más de detalle, al menos 3 letras para el nombre"],
      maxLength: 20,
      trim: true,
    },
    creationYear: {
      type: Number,
      required: false,
      min: [1803, "No mientas porque la marca de coches más antigua es Peugeot y se creó en 1803"],
      max: currentYear,
    },
    country: {
      type: String,
      required: false,
      enum: allowedCountries,
      uppercase: true,
      trim: true,
    },
    logoImage: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Brand = mongoose.model("Brand", brandSchema);
module.exports = { Brand };
```

Recuerda que puedes encontrar en este repositorio todo el código que hemos visto durante la sesión:

<https://github.com/The-Valley-School/node-s9-middlewares-and-file-upload>
