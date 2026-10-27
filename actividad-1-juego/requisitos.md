## Requisitos del juego

# Nombre

- Nombre del juego: De freak a geek

# Preguntas

Las preguntas son de orden aleatorio:

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


# Sistema de puntuación

- Las preguntas acertadas suman 6 puntos y las falladas restan 3 puntos.
- Si has acertado la pregunta anterior se te aplica un bonus de combo que representa un *1,5. Es decir suman 9 puntos.

# Condición de finalización

- El juego finaliza al completar las 8 preguntas.
- Hay un botón para reiniciar el juego.

# Diseño y navegación

- Está diseñado principalmente para pantalla de ordenador pero se incluye versión móvil y tablet response.
- Debe aparecer la pregunta en una tarjeta y debajo las respuestas en tarjetas más pequeñas.

# Tecnologías

- Se debe de crear un index.html, un styles.css y un app.js

# Prohibiciones

- No se pueden usar librerías
- No se pueden usar imágenes remotas
- No se pueden usar datos personales.
- Debe jugarse sin servidor ni dependencias externas

# Defectos y decisiones revisadas
- Dentro de una misma partida se podían repetir las preguntas. Se especifica para su corrección.
- La organización del contenido no es visualmente atractiva. Se especifican un orden de tarjetas para agrupar el contenido.
- Los colores y fuentes elegidos por defecto no son adecuados. Se especifica una selección de colores y fuentes con sentido estético.

## Actividad 2 (OpenCode): pruebas, evidencia y decisión de mejora

### Fallos previos al uso de OpenCode

"No se detectaron fallos en la partida inicial."

### Tabla de pruebas

Pruebas manuales realizadas en el navegador (Codespaces, servidor `python3 -m http.server`), con la consola de desarrollo abierta.

| # | Prueba | Pasos | Resultado esperado | Resultado obtenido | Estado |
|---|---|---|---|---|---|
| 1 | Carga inicial | Abrir `index.html` | Se muestra "Pregunta 1 de 8", puntuación 0, combo x1 y ningún error en consola | [ ] | OK |
| 2 | Validar sin seleccionar | Pulsar "Validar" sin elegir respuesta | Mensaje "Debes seleccionar una respuesta." y no cambia la puntuación | [ ] | [OK] |
| 3 | Respuesta correcta | Elegir la respuesta correcta y validar | "¡Correcto! +6 puntos.", la opción se marca como correcta y el combo pasa a x1,5 | [ ] | [OK] |
| 4 | Combo | Acertar dos preguntas seguidas | La segunda suma +9 puntos | [ ] | [OK] |
| 5 | Respuesta incorrecta | Elegir una respuesta incorrecta y validar | "-3 puntos", se indica la correcta, se marcan ambas opciones y el combo vuelve a x1 | [ ] | [OK] |
| 6 | Última pregunta y pantalla final | Responder la pregunta 8 | Se oculta el cuestionario, se muestra la puntuación final y el foco pasa a "Reiniciar" | [ ] | [OK] |
| 7 | Reinicio | Pulsar "Reiniciar" | Puntuación 0, combo x1, "Pregunta 1 de 8", mismas 8 preguntas en otro orden | [ ] | [OK] |
| 8 | Navegación con flechas | Usar flechas en una pregunta | Se selecciona y enfoca la respuesta siguiente/anterior de forma cíclica | [ ] | [OK] |
| 9 | Teclado completo | Jugar una partida sin ratón (Tab, flechas, Intro) | Se puede completar la partida solo con teclado y el foco es visible | [ ] | [OK] |

### Verificación de los hallazgos del agente revisor

| Hallazgo del revisor | Comprobación realizada | Resultado | Conclusión |
|---|---|---|---|
| Intro sobre una respuesta no valida (`app.js`, listener `keydown`) | Seleccionar con flechas y pulsar Intro | [ ] | [Confirmado] |
| Al cargar, el foco no está en la primera respuesta (`startGame`) | Cargar la página y pulsar Tab | [ ] | [Confirmado ] |
| La puntuación puede ser negativa (`validateAnswer`) | Fallar la primera pregunta | [ ] | [Descartado] |

### Evidencia

| Requisito de la entrega | Archivo de evidencia |
|---|---|
| Revisión sin edición (agente `revisor-juego`) | [revisión sin edición.png] |
| Carga de una skill (`Tool: skill` sin error) | [carga de skill.png ] |
| Petición de permiso al editar | [permiso.png] |


### Incidencias encontradas durante la configuración

- [Skill con `name` no válido para OpenCode v1: el agente intentó cargarla, falló y leyó el archivo a mano. Corrección aplicada.]
- [Skills no detectadas hasta reiniciar OpenCode.]
- [Sintaxis del enunciado (proveedor y permisos del agente) correspondiente a OpenCode v2.]

### Decisión de mejora

- **Mejora propuesta:** [el revisor propone mejorar el uso del teclado, en concreto de la acción tras intro para que se desplace al botón  de validar]
- **Decisión:** [Se aplica]
- **Justificación:** [mejora la usabilidad prescindiendo del uso del Tab]


## Explicación: agente y skills

El agente "revisor-juego" es un subagente con perfil propio y permisos restringidos: revisó "app.js" sin poder editar archivos ni ejecutar comandos.
Su resultado fue una tabla de hallazgos con prioridad, función afectada, evidencia y propuesta, entre ellos el manejo de Intro sobre una respuesta, el foco inicial y la puntuación negativa.
Las skills no son agentes, sino procedimientos reutilizables que carga el agente principal cuando la tarea lo requiere.
La skill "revision-juego" guió una revisión que clasificaba cada observación como error, riesgo o mejora, e indicaba qué comprobaciones necesitaban navegador.
La skill "documentar-juego" propuso comentarios JSDoc y una explicación del flujo del juego, sin modificar el comportamiento del código.
