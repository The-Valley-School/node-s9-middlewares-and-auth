# VIDEO 05 - Gitflow

Gitflow es un flujo de trabajo o metodología de desarrollo de software que utiliza Git como sistema de control de versiones. Fue creado por Vincent Driessen en 2010 y se basa en la idea de que las diferentes etapas del desarrollo de software deben estar separadas en ramas específicas y bien definidas, lo que permite una gestión más eficiente de los cambios en el código.

En Gitflow, se utilizan dos ramas principales: master y develop. La rama master contiene la versión estable y publicada del software, mientras que la rama develop contiene la última versión del software en desarrollo.

Además de estas ramas principales, se utilizan otras ramas específicas para distintas etapas del proceso de desarrollo. Estas ramas incluyen:

- feature: se utilizan para desarrollar nuevas características y funcionalidades. Se crean a partir de la rama develop y se fusionan de vuelta en develop cuando el desarrollo está completo.
- release: se utilizan para preparar el software para su lanzamiento. Se crean a partir de la rama develop y se fusionan en master y develop cuando están listas para su publicación.
- hotfix: se utilizan para corregir errores críticos en la versión actual del software. Se crean a partir de la rama master y se fusionan en master y develop cuando la corrección está completa.

Este enfoque de ramificación y fusión en Gitflow ayuda a los equipos de desarrollo a mantener un control más preciso sobre los cambios en el código y a facilitar el trabajo en equipo. Además, al tener diferentes etapas de desarrollo separadas en diferentes ramas, los desarrolladores pueden trabajar en paralelo de manera más efectiva sin interferir en el trabajo de los demás.

![gitflow.png](/docs/assets/gitflow.png)
