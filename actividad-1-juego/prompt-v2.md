Rol: Actúa como desarrollador/a frontend que crea recursos accesibles para alumnado de 2.º DAW.

Tarea: Construye un juego web de preguntas llamado De freak a geek.

Contexto: Se ejecutará localmente al abrir index.html. El público es un grupo de jóvenes pertenecientes a una asociación juvenil.
Las preguntas son: 
1. ¿Qué significa HTML?

A. HyperText Markup Language

B. High Technology Modern Language

C. Hyperlink Transfer Machine Logic

D. Home Tool Markup List



2. ¿Qué lenguaje se utiliza principalmente para dar estilo visual a una página web?

A. Python

B. CSS

C. SQL

D. Java



3. ¿Quién creó la World Wide Web?

A. Steve Jobs

B. Bill Gates

C. Tim Berners-Lee

D. Linus Torvalds



4. ¿Qué significa HTTP?

A. HyperText Transfer Protocol

B. High Transfer Text Program

C. Host Technology Transmission Process

D. Hyperlink Technical Tool Protocol



5. ¿Qué es Git?

A. Un lenguaje de programación

B. Un sistema de control de versiones

C. Un navegador web

D. Una base de datos relacional



6. ¿Qué significa que una web sea responsive?

A. Que responde automáticamente a los correos

B. Que solo funciona en ordenadores

C. Que adapta su diseño a diferentes tamaños de pantalla

D. Que carga siempre en menos de un segundo



7. ¿Qué personaje es conocido por decir «It's dangerous to go alone! Take this.»?

A. Mario

B. Link

C. Sonic

D. Cloud Strife



8. ¿Qué es una API?

A. Un antivirus para Internet

B. Un formato de imagen animada

C. Una interfaz que permite que distintos programas se comuniquen

D. Un lenguaje exclusivo para diseñar webs

Requisitos funcionales:
- Muestra una pregunta cada vez con cuatro respuestas, sin que se repitan las preguntas en un a misma partida.
- Está diseñado principalmente para pantalla de ordenador pero se incluye versión móvil y tablet response.
- Debe aparecer la pregunta en una tarjeta y debajo las respuestas en tarjetas más pequeñas.
- Las preguntas acertadas suman 6 puntos y las falladas restan 3 puntos.
- Si has acertado la pregunta anterior se te aplica un bonus de combo que representa un *1,5. Es decir suman 9 puntos.
- El juego finaliza al completar las 8 preguntas.
- Al terminar, muestra la puntuación y un botón para reiniciar.
- Las preguntas deben aparecer en un orden aleatorio cada vez que se reinicia el juego.
  
  Requisitos de accesibilidad y calidad:
  - Está diseñado principalmente para pantalla de ordenador pero se incluye versión móvil y tablet response.
  - Usa elementos HTML semánticos, etiquetas visibles y foco de teclado.
  - No uses dependencias, imágenes remotas ni datos personales.
  - Separa HTML, CSS y JavaScript.
  - En la cabecera de la página debe aparecer el nombre del juego.
  - En el cuerpo de la web se sitúa la descripción del juego, la tarjeta de pregunta que contiene el número de pregunta del total disponible, después la tarjeta con la pregunta, debajo las tarjetas con el resto de respuestas y a contracción la puntuación y el combo aplicado.
- Se puede navegar por las respuestas con las flechas del teclado y validar con intro.
- El contenido del body está centrado en la pantalla.
- La cabecera tiene fondo #064734 con letra Arial Black y color de letra #EOFFC2
- El body tiene fondo #EOFFC2 con letra arial y color de letra #064734
  
  Formato de salida:
  1. Muestra primero el árbol de archivos.
  2. Devuelve el contenido completo de index.html, styles.css y app.js en bloques separados.
  3. Explica cómo probarlo localmente y enumera tres pruebas manuales.
  
  Restricciones:
  - No inventes características fuera de esta lista.
  - No uses alert() para toda la interacción.
  - No se pueden usar librerías
  - No se pueden usar imágenes remotas
  - No se pueden usar datos personales.
  - Debe jugarse sin servidor ni dependencias externas