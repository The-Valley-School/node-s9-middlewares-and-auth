# VIDEO 06 - Ejercicio ramas con gitflow

En este ejercicio debes crear un repositorio nuevo y trabajar sobre él como si se tratase de un proyecto que utiliza gitglow.

Para que te hagas una idea una vez lo termines debe quedar con la imagen que se muestra a continuación:

![Captura de pantalla 2023-05-04 a las 12.40.14.png](/docs/assets/Captura_de_pantalla_2023-05-04_a_las_12.40.14.png)

Los pasos a seguir son los siguientes:

- Crea una repositorio nuevo con la rama main como principal
- Crea una rama develop que salga de main
- Haz un commit sobre develop añadiendo el fichero hola.txt
- Haz otro commit sobre develop añadiendo el fichero que-tal.txt
- Crea una rama feature/add-package-json que salga develop y comitea en ella añadiendo el fichero package.json en la versión 1.0.0. Crea una pull request de esta rama para unirla a develop en Github.
- Crea otra rama feature/translate-texts que salga de develop y sube un commit en esa rama traduciendo los ficheros hola y que-tal. Crea una pull request de esta rama para unirla a develop en Github.
- Aprueba la pull request feature/add-package-json en github
- Aprueba la pull request feature/translate-texts en github
- Crea la rama release/2.0.0 a partir de develop y comitea en esa rama cambiando la versión del package.json a la 2.0.0
- Sube un commit a la rama release/2.0.0 añadiendo el fichero index.js
- Crea una pull request de release/2.0.0 a main y otra de release/2.0.0 a develop
- Mergea ambas pull requests
- Crea en develop un fichero adios.txt
- Crea una rama feature/translate-adios-txt que salga de develop y donde subirás un commit traduciendo ese fichero
- Crea una pull request para integrar la rama feature/translate-adios-txt en develop y apruébala
