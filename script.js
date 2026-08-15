function getComputerChoice(max) {
    max = 3
    let result = Math.floor(Math.random() * max)
    if (result === 0) {
        result = "Rock"
    } else if (result === 1) {
        result = "Paper"
    } else {
        result = "Scissors"
    }
    return result
}


function getHumanChoice() {
    let userAnswer = prompt("Choice: Rock, Paper o Scissors")
    return userAnswer
}


// console.log(getHumanChoice())
// console.log(getComputerChoice())

//piedra --> tijeras
//tijeras --> papel
//papel --> piedra

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// 



function playGame() {

    let humanScore = 0
    let computerScore = 0
    let tie = 0

    function playRound(humanChoice, computerChoice) {

        humanChoice = humanChoice.toLowerCase();

        computerChoice = computerChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            tie++
            return;            
        }

        if (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock") {
            humanScore++
            return
        } else {
            computerScore++
            return

        }
    }

        for (let i = 0; i <= 4; i++) { 
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)}
    
    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (humanScore < computerScore) {
        console.log("Computer win the game!")
    } else {
        console.log("The game is a tie!")
    }
    console.log(`Tied Round: ${tie}`)
    console.log(`Human Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)
}

playGame()