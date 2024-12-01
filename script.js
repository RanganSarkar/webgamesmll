let score = 0;
let gameInterval;
let gameDuration = 30000; // 30 seconds

const gameArea = document.getElementById("game-area");
const scoreBoard = document.getElementById("score");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);

function startGame() {
    score = 0;
    scoreBoard.textContent = score;
    startButton.disabled = true;
    gameArea.innerHTML = ""; // Clear the game area

    gameInterval = setInterval(createStar, 1000);

    setTimeout(endGame, gameDuration);
}

function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 370 + "px";
    star.style.animationDuration = Math.random() * 2 + 3 + "s";

    star.addEventListener("click", () => {
        score += 1;
        scoreBoard.textContent = score;
        star.remove();
    });

    star.addEventListener("animationend", () => {
        score -= 1; // Deduct points for missed stars
        scoreBoard.textContent = score;
        star.remove();
    });

    gameArea.appendChild(star);
}

function endGame() {
    clearInterval(gameInterval);
    alert(`Game Over! Your final score is ${score}`);
    startButton.disabled = false;
}
