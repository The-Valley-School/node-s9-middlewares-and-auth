# VIDEO 07 - Ejercicio añadir middlewares al API de libros

En este vídeo debes partir del código de la sesión 7 donde trabajábamos haciendo un API de libros y autores. Sobre ese API debes aplicar los siguientes cambios:

![CAMBIOS.png](/docs/assets/CAMBIOS.png)

- Añade un middleware a nivel de aplicación para hacer log de todas las peticiones que lleguen al API
- Añade un middleware a nivel de rutas que te lea los parámetros de la paginación
- Corrige ESLint para que funcione correctamente
- Añade un middleware de aplicación que gestione todos los errores, recuerda que debes llamar a next(error) en aquellos sitios que suceda alguna excepción
- Añade un servidor de estáticos para poder recuperar ficheros
- Añade un endpoint para subir ficheros haciendo uso de Multer
- Añade el campo profileImage a los autores y crea un endpoint para asociarles una imagen a los autores

Recuerda que puedes encontrar en este repositorio todo el código que hemos visto durante la sesión:

<https://github.com/The-Valley-School/node-s9-middlewares-and-file-upload>
