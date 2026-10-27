1. ¿Se puede saber cuándo el juego está terminado?
Sí. El prompt especifica que el juego finaliza al completar las 8 preguntas. Al terminar, debe mostrar la puntuación final y un botón para reiniciar.

2. ¿Se especifica dónde debe vivir cada parte del código?
Sí. Se indica que HTML, CSS y JavaScript deben estar separados y que se deben entregar tres archivos: index.html, styles.css y app.js.

3. ¿Qué salida será posible comprobar en el navegador?
Se podrá comprobar una pregunta cada vez, las cuatro respuestas, la selección mediante teclado o ratón, la validación de respuestas, los mensajes de acierto o fallo, la puntuación, los bonus por combo y la pantalla final con la opción de reiniciar.

4. ¿Qué requisito impediría que el resultado dependiera de un servicio externo?
El requisito "Debe jugarse sin servidor ni dependencias externas", reforzado por las restricciones de no utilizar librerías ni imágenes remotas. Esto permite ejecutar el juego localmente abriendo index.html en el navegador.

de-freak-a-geek/
├── index.html
├── styles.css
└── app.js


## Cambios en la V.2
# Modifico el prompt ya que no he incluido la especificación de que las preguntas aparezcan en orden aleatorio, que estaba dentro de los requisitos que yo mismo establecí.

# También se incluyen especificaciones para aspectos gráficos como organización del contenido en la página, fuentes y colores.

# Se incluye la especificación de que no se puedan repetir las preguntas en una misma partida.

# En uso con teclado se puede navegar por las respuestas y saltar con la tecla tab al botón de validar