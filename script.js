// List of SpongeBob Quiz Questions
const questions = [
    {
        question: "What is SpongeBob's best friend's name?",
        choices: ["Patrick", "Squidward", "Mr. Krabs", "Sandy"],
        answer: "Patrick"
    },
    {
        question: "Where does SpongeBob work?",
        choices: ["The Krusty Krab", "The Chum Bucket", "Goo Lagoon", "Jellyfish Fields"],
        answer: "The Krusty Krab"
    },
    {
        question: "Who is SpongeBob's pet snail?",
        choices: ["Larry", "Gary", "Puffy", "Fred"],
        answer: "Gary"
    },
    
];

let currentQuestionIndex = 0;
let score = 0;
let highScore = localStorage.getItem('highscore') || 0;

// DOM Elements
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const submitButton = document.getElementById('submit');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('highscore');

highScoreElement.textContent = `High Score: ${highScore}`;

// Function to load question
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = ''; // Clear previous choices
    currentQuestion.choices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.addEventListener('click', () => selectAnswer(choice));
        choicesElement.appendChild(li);
    });
}

// Function to handle answer selection
function selectAnswer(selectedChoice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedChoice === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    alert(`Quiz finished! Your score is ${score}.`);

    if (score > highScore) {
        localStorage.setItem('highscore', score);
        highScoreElement.textContent = `High Score: ${score}`;
        alert("New High Score!");
    }
    // Reset for replay
    score = 0;
    currentQuestionIndex = 0;
    scoreElement.textContent = `Score: 0`;
    loadQuestion();
}

// Event listener for submit button
submitButton.addEventListener('click', () => {
    scoreElement.textContent = `Score: ${score}`;
});

// Load the first question on start
loadQuestion();
