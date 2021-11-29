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
        choices: ["a. display: box;", "b. display: flex;", "c. display: flexbox;", "d. flex: box;"],
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

//element references
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-btn");

var questionDiv = document.getElementById("question-container");
var questionTitle = document.getElementById("question");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("wrapper");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn"); 
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

//other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

//start quiz and timer
var totalTime = 60;
function newQuiz() {
    questionIndex = 0;
    totalTime= 60;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if(questionIndex < questions.length - 1) {
                gameOver();
            }
        }
    }, 1000);
    startQuiz();
};

//show questions
function startQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

//show if the answer is right or wrong
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        correctAns++;
        answerCheck.textContent = "Correct!";
    } else {
        // wrong answer, -5 seconds from timer
        totalTime -= 5;
        timeLeft.textContent = totalTime;
        answerCheck.textContent = "Wrong! The correct answer is: " + questions[questionIndex].answer;
    }

    questionIndex++;
    // repeat
    if (questionIndex < questions.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

//end quiz when time is out or questions are over
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";

    // show final score
    finalScore.textContent = correctAns;
}

// enter initial and store highscore in local storage
function storeHighScores(event) {
    event.preventDefault();

    if (initialInput.value === "") {
        alert("Please enter your initials!");
        return;
    } 

    startDiv.style.display = "none";
    timer.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

        // store high scores in local storage
        var savedHighScores = localStorage.getItem("high scores");
        var scoresArray;
    
        if (savedHighScores === null) {
            scoresArray = [];
        } else {
            scoresArray = JSON.parse(savedHighScores)
        }
    
        var userScore = {
            initials: initialInput.value,
            score: finalScore.textContent
        };
    
        console.log(userScore);
        scoresArray.push(userScore);
    
        var scoresArrayString = JSON.stringify(scoresArray);
        window.localStorage.setItem("high scores", scoresArrayString);

        showHighScores();
    }

var i = 0;
function showHighScores() {

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    // check if there is any in local storage
    if (savedHighScores === null) {
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for (; i < storedHighScores.length; i++) {
        var eachNewHighScore = document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

    startQuizBtn.addEventListener("click", newQuiz);
    choiceA.addEventListener("click", chooseA);
    choiceB.addEventListener("click", chooseB);
    choiceC.addEventListener("click", chooseC);
    choiceD.addEventListener("click", chooseD);
    
    submitInitialBtn.addEventListener("click", function(event){ 
        storeHighScores(event);
    });

    viewHighScore.addEventListener("click", function(event) { 
        showHighScores(event);
    });
    
    goBackBtn.addEventListener("click", function() {
        startDiv.style.display = "block";
        highScoreSection.style.display = "none";
    });
    
    clearHighScoreBtn.addEventListener("click", function(){
        window.localStorage.removeItem("high scores");
        listOfHighScores.innerHTML = "High Scores Cleared!";
        listOfHighScores.setAttribute("style", "font-family: 'Archivo', sans-serif; font-style: italic;")
    });