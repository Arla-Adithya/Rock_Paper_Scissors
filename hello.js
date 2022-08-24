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
    return 0;
    }
    

}


function nee()  {
    const temp = getComputerChoice();
    const but = this.id;
    const res = playRoud(but,temp);
    if(res.includes("Win!")) {
        count++;
        div.textContent = `Your score = ${count}, Computer Score = ${compuCount}`;
    }
    else if(res.includes("Lose!")) {
        compuCount++;
        div.textContent = `Your score = ${count}, Computer Score = ${compuCount}`;
    }
    else{
        div.textContent = "It's a Tie Game. Play Again!"
    }
    if(count==5|| compuCount==5) {
        if(count ==5) {
            div.innerText = "Game Over! You Won."
        }
        else{
            div.innerText = "Game Over! You Lost."
        }
       
        count = 0;
        compuCount = 0;
       
    }
    

}
let count =0;
let compuCount=0;
const div = document.createElement('div');
div.classList.add('result');
const body = document.querySelector('body');
body.append(div);
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', nee);
})
