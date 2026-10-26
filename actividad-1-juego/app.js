
"use strict";

const questions = [
    {
        question: "¿Qué significa HTML?",
        answers: [
            "HyperText Markup Language",
            "High Technology Modern Language",
            "Hyperlink Transfer Machine Logic",
            "Home Tool Markup List"
        ],
        correct: 0
    },
    {
        question: "¿Qué lenguaje se utiliza principalmente para dar estilo visual a una página web?",
        answers: ["Python", "CSS", "SQL", "Java"],
        correct: 1
    },
    {
        question: "¿Quién creó la World Wide Web?",
        answers: [
            "Steve Jobs",
            "Bill Gates",
            "Tim Berners-Lee",
            "Linus Torvalds"
        ],
        correct: 2
    },
    {
        question: "¿Qué significa HTTP?",
        answers: [
            "HyperText Transfer Protocol",
            "High Transfer Text Program",
            "Host Technology Transmission Process",
            "Hyperlink Technical Tool Protocol"
        ],
        correct: 0
    },
    {
        question: "¿Qué es Git?",
        answers: [
            "Un lenguaje de programación",
            "Un sistema de control de versiones",
            "Un navegador web",
            "Una base de datos relacional"
        ],
        correct: 1
    },
    {
        question: "¿Qué significa que una web sea responsive?",
        answers: [
            "Que responde automáticamente a los correos",
            "Que solo funciona en ordenadores",
            "Que adapta su diseño a diferentes tamaños de pantalla",
            "Que carga siempre en menos de un segundo"
        ],
        correct: 2
    },
    {
        question: "¿Qué personaje es conocido por decir «It's dangerous to go alone! Take this.»?",
        answers: ["Mario", "Link", "Sonic", "Cloud Strife"],
        correct: 1
    },
    {
        question: "¿Qué es una API?",
        answers: [
            "Un antivirus para Internet",
            "Un formato de imagen animada",
            "Una interfaz que permite que distintos programas se comuniquen",
            "Un lenguaje exclusivo para diseñar webs"
        ],
        correct: 2
    }
];

// Elementos del HTML
const questionText = document.querySelector("#question-text");
const progress = document.querySelector("#progress");
const answerButtons = [...document.querySelectorAll(".answer-card")];
const feedback = document.querySelector("#feedback");
const scoreDisplay = document.querySelector("#score");
const comboDisplay = document.querySelector("#combo");
const validateButton = document.querySelector("#validate-button");
const nextButton = document.querySelector("#next-button");
const restartButton = document.querySelector("#restart-button");
const finalScore = document.querySelector("#final-score");
const quiz = document.querySelector("#quiz");
const results = document.querySelector("#results");

// Estado de la partida
let gameQuestions = [];
let currentQuestion = 0;
let selectedAnswer = null;
let score = 0;
let previousCorrect = false;
let answered = false;
let gameFinished = false;

// Baraja las preguntas sin modificar el array original.
// Cada pregunta aparece exactamente una vez en la lista resultante.
function shuffleQuestions() {
    const shuffled = [...questions];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

// Muestra la pregunta actual y sus cuatro respuestas.
function renderQuestion() {
    const question = gameQuestions[currentQuestion];

    selectedAnswer = null;
    answered = false;

    progress.textContent =
        `Pregunta ${currentQuestion + 1} de ${gameQuestions.length}`;

    questionText.textContent = question.question;

    feedback.textContent = "Selecciona una respuesta.";

    validateButton.hidden = false;
    validateButton.disabled = false;
    nextButton.hidden = true;

    answerButtons.forEach((button, index) => {
        button.textContent =
            `${String.fromCharCode(65 + index)}. ${question.answers[index]}`;

        button.classList.remove("selected", "correct", "incorrect");
        button.disabled = false;
        button.setAttribute("aria-pressed", "false");
    });

    updateScore();
}

// Actualiza la puntuación y el multiplicador del combo.
function updateScore() {
    scoreDisplay.textContent = score;
    comboDisplay.textContent = previousCorrect ? "x1,5" : "x1";
}

// Selecciona una respuesta.
function selectAnswer(index) {
    if (answered || gameFinished) {
        return;
    }

    selectedAnswer = index;

    answerButtons.forEach((button, buttonIndex) => {
        const selected = buttonIndex === index;

        button.classList.toggle("selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });

    feedback.textContent =
        `Respuesta ${String.fromCharCode(65 + index)} seleccionada.`;
}

// Comprueba la respuesta y calcula los puntos.
function validateAnswer() {
    if (answered || gameFinished) {
        return;
    }

    if (selectedAnswer === null) {
        feedback.textContent = "Debes seleccionar una respuesta.";
        return;
    }

    answered = true;

    const question = gameQuestions[currentQuestion];
    const isCorrect = selectedAnswer === question.correct;

    if (isCorrect) {
        const points = previousCorrect ? 9 : 6;

        score += points;
        previousCorrect = true;

        feedback.textContent = `¡Correcto! +${points} puntos.`;

        answerButtons[selectedAnswer].classList.add("correct");
    } else {
        score -= 3;
        previousCorrect = false;

        feedback.textContent =
            `Incorrecto. -3 puntos. La respuesta correcta era ` +
            `${String.fromCharCode(65 + question.correct)}.`;

        answerButtons[selectedAnswer].classList.add("incorrect");
        answerButtons[question.correct].classList.add("correct");
    }

    answerButtons.forEach(button => {
        button.disabled = true;
    });

    updateScore();
    validateButton.hidden = true;

    if (currentQuestion === gameQuestions.length - 1) {
        showResults();
    } else {
        nextButton.hidden = false;
        nextButton.focus();
    }
}

// Avanza a la siguiente pregunta de la lista barajada.
// No se vuelve a elegir una pregunta al azar en cada avance.
function nextQuestion() {
    if (!answered || gameFinished) {
        return;
    }

    currentQuestion++;
    renderQuestion();
    answerButtons[0].focus();
}

// Finaliza la partida.
function showResults() {
    gameFinished = true;

    quiz.hidden = true;
    results.hidden = false;

    finalScore.textContent = `${score} puntos`;
    restartButton.focus();
}

// Reinicia el estado y genera una nueva lista barajada.
function startGame() {
    gameQuestions = shuffleQuestions();

    currentQuestion = 0;
    selectedAnswer = null;
    score = 0;
    previousCorrect = false;
    answered = false;
    gameFinished = false;

    quiz.hidden = false;
    results.hidden = true;

    renderQuestion();
}

// Eventos de las respuestas.
answerButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        selectAnswer(index);
    });
});

// Eventos de los controles.
validateButton.addEventListener("click", validateAnswer);
nextButton.addEventListener("click", nextQuestion);

restartButton.addEventListener("click", () => {
    startGame();
    answerButtons[0].focus();
});

// Navegación con flechas y validación con Intro.
document.addEventListener("keydown", event => {
    if (gameFinished || answered) {
        return;
    }

    const arrows = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight"
    ];

    if (arrows.includes(event.key)) {
        event.preventDefault();

        let nextIndex;

        if (selectedAnswer === null) {
            nextIndex = 0;
        } else if (
            event.key === "ArrowUp" ||
            event.key === "ArrowLeft"
        ) {
            nextIndex = (selectedAnswer + 3) % answerButtons.length;
        } else {
            nextIndex = (selectedAnswer + 1) % answerButtons.length;
        }

        selectAnswer(nextIndex);
        answerButtons[nextIndex].focus();
    }

    if (event.key === "Enter" && !event.repeat) {
        // El botón de validar ya gestiona su propio evento.
        if (event.target === validateButton) {
            return;
        }

        // No interferir con el botón de siguiente pregunta.
        if (event.target === nextButton) {
            return;
        }

        // Evitar validar dos veces al activar una respuesta.
        if (answerButtons.includes(event.target)) {
            return;
        }

        event.preventDefault();
        validateAnswer();
    }
});

// Inicia la primera partida con las preguntas barajadas.
startGame();
