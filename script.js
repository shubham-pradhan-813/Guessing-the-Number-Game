let secretNumber;
let attempts;

function initGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('guess-input').value = '';
    document.getElementById('restart-button').style.display = 'none';
}

document.getElementById('guess-button').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guess-input').value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = 'Please enter a number between 1 and 100.';
        return;
    }
    attempts++;
    if (guess === secretNumber) {
        document.getElementById('message').textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
        document.getElementById('restart-button').style.display = 'block';
    } else if (guess < secretNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('message').textContent = 'Too high! Try again.';
    }
});

document.getElementById('restart-button').addEventListener('click', function() {
    initGame();
});

window.onload = initGame;
