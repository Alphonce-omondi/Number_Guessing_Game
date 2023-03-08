const gameButtons = document.querySelectorAll('.game-btn');
const gameText = document.getElementsByClassName('game-text');
const gameInput = document.getElementById("game-input");
const gameAlert = document.querySelector('.game-alert');
const soundErrorLow = document.getElementById("sound-error-low");
const soundErrorHigh = document.getElementById("sound-error-high");
const soundSuccess = document.getElementById("sound-success")


let secretNumber;

gameButtons[0].addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 300)
    gameAlert.innerText = "A new number is generated. Good luck guesing it"
})

function checkUserGuess() {
    let userGuess = gameInput.value;
    if (userGuess === "") {
        gameText[1].innerText = "Please provide a number."
    }
    else if (secretNumber === parseInt(userGuess)) {
        gameText[1].innerText = "You found the correct number, you have won.";
        soundSuccess.play();
        body.style.backgroundColor = "gold";

    } else if (parseInt(userGuess) > secretNumber) {
        gameText[1].innerText = `${userGuess} is too high`
        soundErrorHigh.play();
        body.style.backgroundColor = "green";

    } else if (parseInt(userGuess) < secretNumber) {
        gameText[1].innerText = `${userGuess} is too low`
        soundErrorLow.play();
        body.style.backgroundColor = "blue"
    }

    gameInput.value = "";
}
gameButtons[1].addEventListener('click', function () {

})
const body = document.getElementById("body-color")

document.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        checkUserGuess();
    }
})

