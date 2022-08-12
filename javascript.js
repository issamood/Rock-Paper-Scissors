//Function generates a decision for computer randomly
function getComputerChoice() {

    //Getting a random value from 0-2
    var randomizer = Math.floor(Math.random() * 3);
    var choice

    //Setting decisions based upon number chosen from 0-2
    if (randomizer === 0){
        choice = "rock"
    }
    else if (randomizer === 1){
        choice = "paper"
    }
    else{
        choice = "scissor"
    }

    //choice is assigned a decision then returned
    return choice
}

//Function starts a single round of rock paper scissors
function startRound(playerSelection, computerSelection) {

    //Checks if player and computer decions are the same first
    if (playerSelection === computerSelection) {
        return `${playerSelection} vs. ${computerSelection} It's a draw!` 
    }

    //Compares decisions if player chose rock
    else if(playerSelection === "rock"){
        if (computerSelection === "paper"){
            return `${playerSelection} vs. ${computerSelection} Computer wins!`
        }
        else{
            return `${playerSelection} vs. ${computerSelection} You won!`
        }
    }

    //Compares decisions if player chose paper
    else if (playerSelection === "paper"){
        if (computerSelection === "rock") {
            return `${playerSelection} vs. ${computerSelection} You won!`
        }
        else {
            return `${playerSelection} vs. ${computerSelection} Computer wins!`
        }
    }

    //Compares decisions if player chose scissor
    else {
        if (computerSelection === "rock") {
            return `${playerSelection} vs. ${computerSelection} Computer wins!`
        }
        else {
            return `${playerSelection} vs. ${computerSelection} You won!`
        }
    }
}   

function game() {
    
}