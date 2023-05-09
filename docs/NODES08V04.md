# VIDEO 04 - Conflictos en git

Los conflictos en Git pueden ocurrir cuando se intenta fusionar dos ramas que han sido modificadas de manera diferente en las mismas líneas de código. Git no puede fusionar los cambios automáticamente en estos casos, ya que no puede determinar cuál es la versión correcta a utilizar.

Cuando se produce un conflicto en Git, se le notificará al usuario que se requiere una intervención manual para resolver el conflicto. Para resolver un conflicto, se deben seguir los siguientes pasos:

- Ejecutar el comando git status para ver qué archivos tienen conflictos.
- Abrir cada archivo con conflicto en un editor de texto y buscar las secciones que tienen conflictos. Las secciones con conflictos estarán marcadas con <<<<<<<, ======= y >>>>>>>.
- Decidir cuál es la versión correcta a utilizar. Se pueden aceptar una de las versiones, combinar ambas versiones o escribir una nueva versión.
- Editar el archivo para eliminar las marcas de conflicto y asegurarse de que el archivo tenga la versión correcta.
- Guardar el archivo modificado.
- Ejecutar el comando git add para marcar el archivo como resuelto.
- Repetir los pasos 2 a 6 para cada archivo con conflicto.
- Ejecutar el comando git commit para confirmar los cambios y completar la fusión.

Es importante tener en cuenta que, aunque Git puede ayudar a resolver conflictos de fusión, a veces es necesario que el desarrollador tenga un buen conocimiento del código para determinar la mejor manera de resolver un conflicto. También es importante comunicarse con otros desarrolladores involucrados para asegurarse de que los cambios que se realizan sean coherentes y cohesivos con el proyecto en general.
