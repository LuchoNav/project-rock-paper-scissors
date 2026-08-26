const container = document.querySelector("#container");
const result = document.getElementById("result")

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


let humanScore = 0
let computerScore = 0
let tie = 0

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        tie++
            ;
    }

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        humanScore++

    } else {
        computerScore++

    }
    result.textContent = `Humano eligió: ${humanChoice} | Computadora eligió: ${computerChoice} | Puntuación - Humano: ${humanScore} Computadora: ${computerScore}`;

    if (humanScore === 5){
        btn.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        result.textContent = "Felicidades, Eres el ganador"
    } else if (computerScore === 5) {
        btn.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        result.textContent = "Perdiste!"
    }

}



