var startButton = document.getElementById('start-btn');
var startScreen = document.getElementById('start');
var questionContainer = document.getElementById('questions');
var questionEl = document.getElementById('question');
var answerButton = document.getElementById('answers');
var endScreen = document.getElementById('end');

startButton.addEventListener('click', startQuiz);

// Timer
var count = document.querySelector('#timer');
var secondsLeft = 60;
var timer;
function timer() {
    count.textContent = secondsLeft;
    timer = setInterval(function(){
        secondsLeft--;
        if (secondsLeft === 0) {
            clearInterval(timer);
            alert('Your time has run out!');
        }
    }, 1000)
}

// Start Quiz
function startQuiz() {
    console.log('quiz started')
    startButton.remove()
    startScreen.remove()
}