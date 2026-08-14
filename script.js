function getComputerChoice(max) {
    let result = Math.floor(Math.random() * max)
    if (result === 0) {
        result = "Rock"
    } else if (result === 1) {
        result = "Paper"
    } else {
        result = "Scissors"
    }
    return result.toLowerCase()
}


function getHumanChoice(){
    let userAnswer = prompt("Choise: Rock, Paper o Scissors")
    return userAnswer
}


console.log(getHumanChoice())
console.log(getComputerChoice(3))
