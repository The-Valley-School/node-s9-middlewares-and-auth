# VIDEO 05 - Subida de ficheros con multer

En este vídeo hemos visto la librería Multer:

<https://github.com/expressjs/multer>

La librería Multer es una middleware para manejar el envío de archivos en Node.js. En particular, Multer se utiliza en aplicaciones Express para procesar datos de formulario multipart/form-data, que es el formato utilizado para enviar archivos y otros datos binarios a través de formularios HTML.

Multer permite configurar cómo se manejarán los archivos enviados en el formulario, como el destino donde se almacenarán los archivos en el servidor y el nombre del archivo. También proporciona una API para acceder a los detalles de los archivos enviados, como el nombre, tipo y tamaño del archivo.

Multer es especialmente útil en aplicaciones que necesitan manejar la carga de archivos de manera eficiente y segura. Por ejemplo, en una aplicación de intercambio de archivos, Multer puede ser utilizado para procesar y almacenar archivos enviados por los usuarios.

Para instalar la librería debemos ejecutar:

```javascript
npm i multer
```

Tras esto hemos creado una ruta para subir ficheros:

```javascript
const express = require("express");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();

const upload = multer({ dest: "public" });

router.post("/", upload.single("file"), (req, res, next) => {
  const originalname = req.file.originalname;
  const path = req.file.path;

  const newPath = path + "_" + originalname;

  console.log("Path generado por multer: " + path);
  console.log("Nuevo path: " + newPath);

  fs.renameSync(path, newPath);

  res.send("Fichero subido correctamente!");
  console.log("Fichero subido correctamente!");
});

module.exports = { fileUploadRouter: router };
```

Puedes observar que debemos re-nombrar los ficheros para que no pierdan su extensión.

Ahora con este HTML simple podemos subir ficheros a nuestra carpeta public:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <form action="http://localhost:3000/file-upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" />
      <button type="submit">ENVIAR</button>
    </form>
  </body>
</html>
```
