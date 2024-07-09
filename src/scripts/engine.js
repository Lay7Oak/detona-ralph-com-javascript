const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        startButton: document.getElementById("start-button"),
        restartButton: document.getElementById("restart-button"),
        livesDisplay: document.querySelector("#lives"),
        instrucaoButton: document.getElementById('instrucao'),
        regras: document.getElementById('regras'),
        soundButton: document.getElementById('on-sound-off'),
    },
    values: {
        gameVelocity: 600,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
        lives: 3,
        wrongClicks: 0,
        timeId: null,
        countDownTimeId: null,
        isGameOver: false,
        isSoundOn: true,
    },
};

function countDown() {
    if (state.values.isGameOver) return;

    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0 || (state.values.currentTime === 9 && state.values.result < 30)) {
        clearInterval(state.values.countDownTimeId);
        clearInterval(state.values.timeId);
        if (state.values.result > 30) {
            alert(`Você é Master! Parabéns, ultrapassou a Meta com ${state.values.result} pontos!`);
        } else if (state.values.result >= 30) {
            alert(`Meta atingida! Parabéns! Você completou o jogo com sucesso!`);
        } else {
            loseLifeAndContinue(`Meta não atingida! Perdeu uma vida! Você fez ${state.values.result} pontos.`);
        }
        resetGame();
    }
    
}

function playSound(audioName) {
      if(!state.values.isSoundOn) return;

    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.05;
    audio.play();
}

function sound(){
    state.values.isSoundOn = !state.values.isSoundOn;
    state.view.soundButton.textContent = state.values.isSoundOn ? "Desativar Som" : "Ativar Som";
}


function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function addClickListener(square) {
    square.addEventListener('click', function() {
        if (!square.classList.contains('enemy')) {
            square.classList.add('clicked');
            setTimeout(() => {
                square.classList.remove('clicked');
            }, 300);
        }
    });
}

function addListenersToSquares() {
    state.view.squares.forEach(square => {
        addClickListener(square);
    });
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("click", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound("hit");
            } else {
                state.values.wrongClicks++;
                if (state.values.wrongClicks >= 3) {
                    setTimeout(() => {
                        loseLifeAndContinue(`3 Cliques em Janela Vazia! Perdeu uma vida! Você fez ${state.values.result} pontos.`);
                    }, 300);
                } else {
                    if (!square.classList.contains('enemy')) {
                        square.classList.add('clicked');
                        setTimeout(() => {
                            square.classList.remove('clicked');
                        }, 300);
                    }
                }
            }
        });
    });

    state.view.instrucaoButton.addEventListener('click', function() {
        state.view.regras.classList.toggle('instruct');
    });
}

function loseLifeAndContinue(message) {
    if (state.values.isGameOver) return;

    state.values.lives--;
    state.view.livesDisplay.textContent = `x${state.values.lives}`;
    if (state.values.lives <= 0) {
        state.values.isGameOver = true;
        alert("Game Over! Você perdeu todas as vidas.");
        setTimeout(() => {
            location.reload();
        }, 500);
    } else {
        alert(message);
        setTimeout(() => {
            resetGame();
            state.values.timeId = setInterval(randomSquare, state.values.gameVelocity);
            state.values.countDownTimeId = setInterval(countDown, 1000);
        }, 500);
    }
}

function startGame() {
    state.values.result = 0;
    state.values.currentTime = 60;
    state.values.lives = 3;
    state.values.wrongClicks = 0;
    state.values.isGameOver = false;

    state.view.score.textContent = state.values.result;
    state.view.timeLeft.textContent = state.values.currentTime;
    state.view.livesDisplay.textContent = `x${state.values.lives}`;

    state.values.timeId = setInterval(randomSquare, state.values.gameVelocity);
    state.values.countDownTimeId = setInterval(countDown, 1000);

    state.view.startButton.disabled = true;
}

function resetGame() {
    clearInterval(state.values.timeId);
    clearInterval(state.values.countDownTimeId);

    state.view.startButton.disabled = false;
    state.values.result = 0;
    state.values.currentTime = 60;
    state.values.wrongClicks = 0;
    state.view.score.textContent = state.values.result;
    state.view.timeLeft.textContent = state.values.currentTime;
}

document.addEventListener('DOMContentLoaded', function() {
    init();
});

function init() {
    addListenersToSquares();
    addListenerHitBox();
    state.view.startButton.addEventListener('click', startGame);
    state.view.restartButton.addEventListener('click', function() {
        location.reload();
    });

    state.view.soundButton.addEventListener('click', sound);
}
