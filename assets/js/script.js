// Questions
const questions = [
    {
        question: "Which of these are not a coding language?",
        choices: ["a. JavaScript", "b. CSS", "c. Bootstrap", "d. HTML"],
        answer: "c. Bootstrap"
    },
    {
        question: "What is the command to 'push' code to GitHub?",
        choices: ["a. git push origin main", "b. git push", "c. git commit -m", "d. push origin main"],
        answer: "a. git push origin main"
    },
    {
        question: "How do you create a flex box?",
        choices: ["a. display: box;", "b. display: flex;", "c. display: flexbox;", "flex: box;"],
        answer: "b. display: flex;"
    },
    {
        question: "the condition in an if/else statement is enclosed with _______.",
        choices: ["a. Quotes", "b. Square brakets", "c. Parenthesis", "d. Curly brackets"],
        answer: "d. Curly brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["a. Numbers and strangs", "b. Other arrays", "c. Booleans", "d. All of the above"],
        answer: "d. All of the above"
    }
]

var startButton = document.getElementById('start-btn');
var startScreen = document.getElementById('startScreen');
var questionContainer = document.getElementById('questionContainer');
var questionEl = document.getElementById('question');
var answerButton = document.getElementById('choices');
var endScreen = document.getElementById('end-screen');
var scoreBonus = 10;

var score = 0;
var randomQuestions;
var setQuestions = 0;

startButton.addEventListener('click', startQuiz);

// Timer
var count = document.querySelector('#timer');
var secondsLeft = 60;
var timer;
function timer() {
    count.textContent = secondsLeft;
    timer = setInterval(function() {
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
document.querySelector("#btn2").textContent = "2. " +question.answers[1].text
document.querySelector("#btn3").textContent = "3. " +question.answers[2].text
document.querySelector("#btn4").textContent = "4. " +question.answers[3].text

var score = "1";
document.querySelector('.btn').addEventListener('click', function() {
    setQuestions++;
    console.log(question.answers[0].text) 

    if (question.answers[0].correct) {
        incrementScore(scoreBonus);
        console.log(incrementScore)
        success()
    } else {
        failure()
    }
    generateQuestion();

})

incrementScore = num => {
    score += num;
}

var answer = document.createElement('p')
document.querySelector('#choices').appendChild(answer)

function success() {
    answer.textContent = "Correct!"
}

function failure() {
    answer.textContent = "Wrong!"
}

// End quiz
function endQuiz() {
    startButton.remove()
    startScreen.remove()
    questionContainer.remove()
    endScreen.classList.remove('hide');
    clearInterval(timer);
}