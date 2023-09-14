let currentQuestion = 0;
let score = 0;
const questions = [
    {
        question: "What is 2 + 2?",
        correctAnswer: "b"
    },
    {
        question: "What is 3 x 4?",
        correctAnswer: "c"
    },
    // Add more questions here
];

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const navIcon = document.querySelector(".nav-icon");
const navLinks = document.querySelector(".nav-links");

navIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

function displayQuestion() {
    questionElement.textContent = ` ${currentQuestion + 1} . ${questions[currentQuestion].question}`;
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedAnswer) {
        alert("Please select an answer.");
        return;
    }

    if (selectedAnswer.value === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }

    selectedAnswer.checked = false;
}

function showScore() {
    questionElement.textContent = "Quiz Complete!";
    scoreElement.textContent = `Your Score: ${score} / ${questions.length}`;
}

displayQuestion();
