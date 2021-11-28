// Questions
var questions = [
    {
        question: "Which of these are not a coding language?",
        answers: [
            {text: "JavaScript", correct: false},
            {text: "CSS", correct: false},
            {text: "Bootstrap", correct: true},
            {text: "HTML", correct: false},
        ]
    },
    {
        question: "What is the command to 'push' code to GitHub?",
        answers: [
            {text: "git push origin main", correct: true},
            {text: "git push", correct: false},
            {text: "git commit -m", correct: false},
            {text: "push origin main", correct: false},
        ]
    },
    {
        question: "How do you create a flex box?",
        answers: [
            {text: "display: box;", correct: false},
            {text: "display: flex;", correct: true},
            {text: "display: flexbox;", correct: false},
        ]
    },
    {
        question: "the condition in an if/else statement is enclosed with _______.",
        answers: [
            {text: "Quotes", correct: false},
            {text: "Square brakets", correct: false},
            {text: "Parenthesis", correct: false},
            {text: "Curly brackets", correct: true},
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: [
            {text: "Numbers and strangs", correct: false},
            {text: "Other arrays", correct: false},
            {text: "Booleans", correct: false},
            {text: "All of the above", correct: true},
        ]
    },
]

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
    questionContainer.classList.remove('hide');
    generateQuestion();
    timer();
}

// Generate the questions
function generateQuestion() {
    if (setQuestions < 5) {
        nextQuestion(questions[setQuestions]);
        localStorage.setItem('mostRecentScore', score)
    } else {
        endQuiz()
    }
}

function nextQuestion(question) {
    var randomNumber = Math.floor(Math.random() * 4)

    if (array.includes(randomNumber) == false) {
        console.log(!(randomNumber in array), randomNumber)
        array.push(randomNumber)
    }
}

console.log(question);

document.querySelector("#question").textContent = question.question;

//button text
document.querySelector("#btn1").textContent = "1. " +question.answers[0].text
document.querySelector("#btn2").textContent = "2. " +question.answers[0].text
document.querySelector("#btn3").textContent = "3. " +question.answers[0].text
document.querySelector("#btn4").textContent = "4. " +question.answers[0].text