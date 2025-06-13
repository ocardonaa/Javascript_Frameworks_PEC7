# README.md
## Login UOC
ocardonaa

## Nombre y apellidos
Oriol Cardona Alsina

## Dificultades y ejercicios realizados en esta PEC

Ej1: en este ejercicio encontré que la documentación de O'Reilly no era tan extensa como en otras entregas, para ello usé la documentación oficial de Angular o foros de StackOverflow para resolver alguna de las preguntas, pero no hubo más complicaciones más allá de eso.

Ej2: para la realización de este ejercicio tuve bastantes problemas al principio a la hora de interactuar con la API. Ya fuera por fallos menores como no llamar a la API haciendo `ng serve --proxy-config proxy.conf.json`. Pero también tuve algun problema serio de comprensión de como llamar a los usuarios. En cierto momento me creé una llamada para ver a los usuarios pero no es importante, solo era de debug. El unico cambio es en article.js donde en la llamada de patch devuelvo esto en caso de encontrar la cantidad que cambiar: `return res.status(200).json(foundArticle );` y no un mensaje.
Para crear los distintos elementos no tuve mucha dificultad y para gestionar el Routing tampoco ya que el capítulo 11 de O'Reilly lo explica bien y ya usaba un sistema similar en anteriores PECs. Mi mayor dificultad fue el asegurar las rutas, crear el sistema de register y login y gestionar los guards ya que habia partes que no explicaba tanto la lección de O'Reilly y además hay muchos ficheros y llamadas implicados. Revisando mejor el ejemplo, el code-base de Github (donde está el repositorio) y algún foro para comprender mejor cada llamada pude finalmente completar el ejercicio.
Finalmente mi última dificultad fue el como usar el token, pero analizando mejor el código pude ver los puntos donde interesa mirar si localStorage lo contiene para usarlo, por ejemplo, al refrescar la página.