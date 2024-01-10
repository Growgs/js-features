let deadCounter = 0;
let lostCounter = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function updateCounters() {
    document.getElementById('dead').textContent = deadCounter;
    document.getElementById('lost').textContent = lostCounter;

    checkEndGame();
}

function checkEndGame() {
    if (deadCounter >= 10 || lostCounter >= 5) {
        endGame(deadCounter >= 10 ? 'Поздравляем! Вы выиграли!' : 'Игра закончена. Вы проиграли.');
    }
}

function endGame(message) {
    alert(message);
    resetStats();
}

function resetStats() {
    deadCounter = 0;
    lostCounter = 0;
    updateCounters();
}

function handleClick(i) {
    const hole = getHole(i);
    const isMole = hole.classList.contains('hole_has-mole');

    deadCounter += isMole ? 1 : 0;
    lostCounter += isMole ? 0 : 1;

    updateCounters();
}

for (let i = 1; i <= 9; i++) {
    getHole(i).addEventListener('click', () => handleClick(i));
}

updateCounters();
