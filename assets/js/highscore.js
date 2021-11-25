var backButton =  document.getElementById("back-btn");

backButton.addEventListener("click", startQuiz);

var highScoreList = document.getElementById("#highScoreList");
var highScoreList = JSON.parse(localStorage.getItem("highScores")) || [];

highScoreList.innerHTML = highScore
.map(score => {
    return <li class="high-score">${score.name}-${score.score}</li>
})
.join("");