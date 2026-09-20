const container = document.querySelector("#container");
const puntuacionHumano = document.getElementById("resultado-humano");
const puntuacionComputadora = document.getElementById("resultado-computadora");
const puntuacionEmpates = document.getElementById("resultado-empates");
const result = document.getElementById("resultado¡");

//boton 1
const btn = document.createElement("button")
btn.classList.add("rock")
btn.textContent = "Rock"

//boton 2

const btn2 = document.createElement("button")
btn2.classList.add("paper")
btn2.textContent = "Paper"

//boton 3

const btn3 = document.createElement("button")
btn3.classList.add("scissors")
btn3.textContent = "Scissors"


container.appendChild(btn);
container.appendChild(btn2);
container.appendChild(btn3);


btn.addEventListener("click", function () {
    let eleccionComputadora = getComputerChoice();
    playRound("rock", eleccionComputadora)
});


btn2.addEventListener("click", function () {
    let eleccionComputadora = getComputerChoice();
    playRound("paper", eleccionComputadora)
});


btn3.addEventListener("click", function () {
    let eleccionComputadora = getComputerChoice();
    playRound("scissors", eleccionComputadora)
});



function getComputerChoice(max) {
    max = 3
    let result = Math.floor(Math.random() * max)
    if (result === 0) {
        result = "rock"
    } else if (result === 1) {
        result = "paper"
    } else {
        result = "scissors"
    }
    return result
}

const btnReset = document.createElement("button");
btnReset.classList.add("reset");
btnReset.textContent = "Reiniciar";
container.appendChild(btnReset);
btnReset.style.display = "none";

btnReset.addEventListener("click", function () {
    humanScore = 0;
    computerScore = 0;
    tie = 0;

    puntuacionHumano.textContent = `Humano: 0`;
    puntuacionComputadora.textContent = `Computadora: 0`;
    puntuacionEmpates.textContent = `Empates: 0`;

    btn.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btnReset.style.display = "none";
    

    result.textContent = "";
});

let humanScore = 0
let computerScore = 0
let tie = 0

function playRound(humanChoice, computerChoice) {
    btnReset.style.display = "none";
    if (humanChoice === computerChoice) {
        tie++;
    }

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        humanScore++

    } else {
        computerScore++

    }
    puntuacionHumano.textContent = `Humano: ${humanScore}`;
    puntuacionComputadora.textContent = `Computadora: ${computerScore}`;
    puntuacionEmpates.textContent = `Empates: ${tie}`;

    if (humanScore === 5) {
        btn.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        result.textContent = "🎉 ¡Felicidades, Eres el ganador!"
        btnReset.style.display = "block";
    } else if (computerScore === 5) {
        btn.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btnReset.style.display = "block";
        result.textContent = "Perdiste!"
    }

}



