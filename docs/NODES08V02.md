# VIDEO 02 - Mergeo de ramas en local

Para fusionar una rama en Git desde la línea de comandos, se debe seguir los siguientes pasos:

Cambiarse a la rama en la que se desea fusionar los cambios. Por ejemplo, si se desea fusionar los cambios de la rama "nueva-caracteristica" en la rama principal “main”, se debe escribir el siguiente comando:

```jsx
git checkout main
```

Ejecutar el comando git merge seguido del nombre de la rama que se desea fusionar. Por ejemplo, si se desea fusionar los cambios de la rama "nueva-caracteristica" en la rama "main", se debe escribir el siguiente comando:

```jsx
git merge nueva-caracteristica
```

Git intentará fusionar automáticamente los cambios de ambas ramas. En algunos casos, puede haber conflictos de fusión que necesiten ser resueltos manualmente.

Por último, se debe confirmar la fusión con el comando git commit. Git abrirá un editor de texto para escribir un mensaje de confirmación que describa los cambios que se han fusionado.

```jsx
git commit
```

Una vez que se ha confirmado la fusión, los cambios de la rama fusionada estarán disponibles en la rama principal.
