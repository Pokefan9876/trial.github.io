document.addEventListener("DOMContentLoaded", function() {
    const player = document.getElementById("player");
    const star = document.getElementById("star");
    const obstacle = document.getElementById("obstacle");
    const scoreDisplay = document.getElementById("score");

    let score = 0;

    function movePlayer(event) {
        if (event.key === "ArrowRight") {
            player.style.left = parseInt(player.style.left || "0") + 10 + "px";
        } else if (event.key === "ArrowLeft") {
            player.style.left = parseInt(player.style.left || "0") - 10 + "px";
        }

        checkCollision();
    }

    function checkCollision() {
        if (isColliding(player, star)) {
            score++;
            scoreDisplay.innerText = "Score: " + score;
            resetStar();
        } else if (isColliding(player, obstacle)) {
            alert("Game Over! Your score: " + score);
            resetGame();
        }
    }

    function isColliding(element1, element2) {
        const rect1 = element1.getBoundingClientRect();
        const rect2 = element2.getBoundingClientRect();

        return !(rect1.right < rect2.left ||
                 rect1.left > rect2.right ||
                 rect1.bottom < rect2.top ||
                 rect1.top > rect2.bottom);
    }

    function resetStar() {
        star.style.top = Math.floor(Math.random() * 360) + "px";
        star.style.left = Math.floor(Math.random() * 360) + "px";
    }

    function resetGame() {
        score = 0;
        scoreDisplay.innerText = "Score: " + score;
        player.style.left = "0";
        resetStar();
    }

    document.addEventListener("keydown", movePlayer);
});
