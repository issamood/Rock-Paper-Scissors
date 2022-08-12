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
            return `${playerSelection} vs. ${computerSelection} You win!`
        }
    }

    //Compares decisions if player chose paper
    else if (playerSelection === "paper"){
        if (computerSelection === "rock") {
            return `${playerSelection} vs. ${computerSelection} You win!`
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
            return `${playerSelection} vs. ${computerSelection} You win!`
        }
    }
}   

//this function plays a 5 round bout of rock paper scissors
function game() {
    var playerScore = 0;
    var computerScore = 0;
    var playerChoice = ""
    var inputCheck = false;
    var result = ""

    //for loop for 5 rounds of rock, paper, scissors
    for (var i = 1; i <= 5; i++){
        //While loop until user puts in a valid answer
        while (inputCheck === false) {
            var playerInput = prompt("Please enter rock paper or scissor: ")
            playerChoice = playerInput.toLowerCase()
            /*Match method returns an array, which makes things
            a bit complicated for me. However it returns a null, if it
            doesn't find a match, so then I just check rock, paper, 
            or scissor exists in the inputted string from the user, 
            if so assign the appropriate value, if not, we prompt the user again
            */
            if (playerChoice.match("rock") !== null){
            playerChoice = "rock";
            inputCheck = true;
            }
            else if (playerChoice.match("paper") !== null) {
                playerChoice = "paper";
                inputCheck = true;
            }
            else if (playerChoice.match("scissor") !== null) {
                playerChoice = "scissor"
                inputCheck = true;
            }
            else {
                console.log("Invalid input, please try again.")
            }
        }

        //Calculate result
        result = startRound(playerChoice, getComputerChoice())
        //I chose 'you' as the keyword to find in the returned string to see if the user won or not.
        if (result.match("You") !== null){
            console.log(result)
            playerScore++
        }
        else{
            console.log(result)
            computerScore++
        }
        inputCheck = false
        playerChoice = ""
    }

    //Checks and prints final score
    if (playerScore === computerScore){
        console.log(`The final score is ${playerScore} to ${computerScore}. It's a draw!`)
    } 
    else if (playerScore > computerScore){
        console.log(`The final score is ${playerScore} to ${computerScore}. You win the game!`)
    }
    else {
        console.log(`The final score is ${playerScore} to ${computerScore}. Computer wins the game!`)
    }
}

game()
