let playerScore = 0;
let computerScore = 0;

//Creating function for Computer's Option
function getRandomInput(){
    const buttons = ["Rock","Paper","Scissor"];
    let randomIndex = Math.floor(Math.random() * buttons.length);
    return buttons[randomIndex];
}

//Creating a function for win situations
function doesUserWin(userOption,computerInput){
    if((userOption == "Rock" && computerInput == "Scissor") || (userOption == "Paper" && computerInput == "Rock") || (userOption == "Scissor" && computerInput == "Paper")){
        return true;
    }else{
        return false;
    }
}

//Creating a function for getting Score
function scoreResult(userOption){
    const computerInput = getRandomInput();
    if(doesUserWin(userOption,computerInput)){
        playerScore+=1;
        return `Player wins! ${userOption} beats ${computerInput}`;
    }else if(userOption === computerInput){
        return `Its a tie! Both have selected ${userOption}`;
    }else{
        computerScore+=1;
        return `Computer wins! ${computerInput} beats ${userOption}`; 
    }
}

const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const rockBtn = document.getElementById('rock-button');
const paperBtn = document.getElementById('paper-button');
const scissorBtn = document.getElementById('scissor-button');
const resultMessage = document.getElementById('resultMessage');
const winnerMessage = document.getElementById('winnerMessage');
const resetGameBtn = document.getElementById('play-again');
const buttons = document.getElementsByClassName('buttons');
const optionContainer = document.getElementById('option-section');

function showResults(userOption){
    resultMessage.textContent = scoreResult(userOption);
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    if(playerScore == 5 || computerScore == 5){
        winnerMessage.textContent = `${playerScore == 5? "Player" : "Computer"} wins the game!`;
        resetGameBtn.style.display = 'block';
        optionContainer.style.display = 'none';
    }
}

rockBtn.addEventListener('click', () => showResults("Rock"));
paperBtn.addEventListener('click',() => showResults("Paper"));
scissorBtn.addEventListener('click',() => showResults("Scissor"));

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    winnerMessage.textContent = "";
    resultMessage.style.display = 'block';
    resultMessage.textContent = "";
    resetGameBtn.style.display = 'none';
    optionContainer.style.display = 'block';
}

resetGameBtn.addEventListener('click',resetGame);

