function getComputerChoice(){
    const choice = Math.floor(Math.random() *3);
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            console.log("Invalid");
    }
}


function playRoud(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection==computerSelection) {
        return "It's a Tie!"
    }
    if(playerSelection =="rock") {
        if(computerSelection == "paper"){
            return "You Lose! Paper beats the Rock";
        }
        else {
            return "You Win! Rock beats the Scissors ";
        }
    }
    if(playerSelection =="paper") {
        if(computerSelection == "scissors"){
            return "You Lose! Scissors beats the Paper";
        }
        else {
            return "You Win! Paper beats the Rock";
        }
    }
    if(playerSelection =="scissors") {
        if(computerSelection == "rock"){
            return "You Lose! Rock beats the Scissors";
        }
        else {
            return "You Win! Scissors beats the Paper";
        }
    }

}

function game() {
    let count = 0;
    let compuCount =0;
    for (let i = 0; i<5; i++) {
        const playerSelection = prompt("What's your choice?");
        const computerSelection = getComputerChoice();
        let result = playRoud(playerSelection,computerSelection);
        
        if(result.includes("Win!")) {
            console.log("You won for this round")
            count++;
        }
        else if (result.includes("Tie!")){
            console.log("It's a Tie");
        }
        else {
            console.log("You lost for this round")
            compuCount++;
        }
    }
    if (count > compuCount) {
        console.log("You Win!");
    }
    else if (count == compuCount) {
        console.log("It's a Tie!");
    }
    else {
        console.log("You Lose!");
    }
}

game();
