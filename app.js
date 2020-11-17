let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result >p");
const rock_div = document.getElementById("r"); 
const paper_div = document.getElementById("p"); 
const scissors_div = document.getElementById("s"); 

function getComputerChoise(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissors";
}

function win(userchoice,computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userchoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userchoice)}${smallUserWord} beats 
    ${convertToWord(computerChoice)}${smallCompWord} .You win!`;

    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"),300);

}

function lose(userchoice,computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userchoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userchoice)}${smallUserWord} loses to 
    ${convertToWord(computerChoice)}${smallCompWord} .You Lost...`;

    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"),300);
}

function draw(userchoice,computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userchoice);
    result_p.innerHTML = `${convertToWord(userchoice)}${smallUserWord} equals 
    ${convertToWord(computerChoice)}${smallCompWord} .Its a draw.`;

    userChoice_div.classList.add("grey-glow");
    setTimeout(() => userChoice_div.classList.remove("grey-glow"),300);
}

function game(userchoice){
    const computerChoice = getComputerChoise();
    switch(userchoice + computerChoice){
        case'rs':
        case'pr':
        case'sp':
        win(userchoice,computerChoice);
        break;
        case'rp':
        case'ps':
        case'sr':
        lose(userchoice,computerChoice);
        break;
        case'rr':
        case'pp':
        case'ss':
        draw(userchoice,computerChoice);
        break;
    }
}

function main(){
    rock_div.addEventListener('click',() => game("r"));
    paper_div.addEventListener('click',() => game("p"));
    scissors_div.addEventListener('click',() => game("s"));
}

main();
