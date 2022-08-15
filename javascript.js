let playerScore = 0;
let computerScore = 0;

//Function generates a decision for computer randomly
function getComputerChoice() {

    //Getting a random value from 0-2
    var randomizer = Math.floor(Math.random() * 3);
    var choice = ""

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
            computerScore++
            return `${playerSelection} vs. ${computerSelection} Computer wins!`
        }
        else{
            playerScore++
            return `${playerSelection} vs. ${computerSelection} You win!`
        }
    }

    //Compares decisions if player chose paper
    else if (playerSelection === "paper"){
        if (computerSelection === "rock") {
            playerScore++
            return `${playerSelection} vs. ${computerSelection} You win!`
        }
        else {
            computerScore++
            return `${playerSelection} vs. ${computerSelection} Computer wins!`
        }
    }

    //Compares decisions if player chose scissor
    else {
        if (computerSelection === "rock") {
            computerScore++
            return `${playerSelection} vs. ${computerSelection} Computer wins!`
        }
        else {
            playerScore++
            return `${playerSelection} vs. ${computerSelection} You win!`
        }
    }
}   

//on click, startRound
//get which button was clicked
// input userChoice into startRound function

const rock = document.querySelector('.rockbtn'); //selecting which element to be affected and assigning it to a variable to keep it simple
const paper = document.querySelector('.paperbtn');
const scissor = document.querySelector('.scissorbtn');

rock.addEventListener('click', function(e){
    console.log(startRound('rock',getComputerChoice()));
    updateScore()
    checkWinner()
})
paper.addEventListener('click', function(e){
    console.log(startRound('paper',getComputerChoice()));
    updateScore()
    checkWinner()
})
scissor.addEventListener('click', function(e){
    console.log(startRound('scissor',getComputerChoice()));
    updateScore()
    checkWinner()
})

function updateScore(){
    let playerScoreRecord = document.querySelector('#playerScore');
    let computerScoreRecord = document.querySelector('#computerScore');
    playerScoreRecord.textContent = `Player Score: ${playerScore}`
    computerScoreRecord.textContent = `Computer Score: ${computerScore}`
}

function checkWinner() {
    const result = document.querySelector('.result')
    let resetResult = false;

    if (playerScore === 5) {
        result.textContent = 'Player wins first to five!';
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#playerScore').textContent = 'Player Score: 0';
        document.querySelector('#computerScore').textContent = 'Computer Score: 0';
        resetResult = true;
    }
    else if(computerScore === 5) {
        result.textContent = 'Computer wins first to five!';
        playerScore = 0;
        computerScore = 0;
        document.querySelector('#playerScore').textContent = 'Player Score: 0';
        document.querySelector('#computerScore').textContent = 'Computer Score: 0';
        resetResult;
    }

    if (resetResult === true) {
        reset.textContent = ""
        resetResult = false;
    }
}
