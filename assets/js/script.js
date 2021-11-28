var startButton = document.getElementById('start-btn');
var startScreen = document.getElementById('start');
var questionContainer = document.getElementById('questions');
var questionEl = document.getElementById('question');
var answerButton = document.getElementById('answers');
var endScreen = document.getElementById('end');

startButton.addEventListener('click', startQuiz);

// Start Quiz
function startQuiz() {
    console.log('quiz started')
    startButton.remove()
    startScreen.remove()
}