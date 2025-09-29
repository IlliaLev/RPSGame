function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
    if(player === "Rock" && computer === "Scissors") {
      return true;
    } else if(player === "Scissors" && computer === "Paper"){
      return true;
    } else if(player === "Paper" && computer === "Rock"){
      return true;
    } else {
      return false;
    }
}
  
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    if(userOption === computerResult) {
      return `It's a tie! Both chose ${userOption}`;
    }
    const hasPlayerWon = hasPlayerWonTheRound(userOption, computerResult);
    if(hasPlayerWon){
      playerScore++;
      return `Player wins! ${userOption} beats ${computerResult}`;
    } else {
      computerScore++;
      return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

function showResults(userOption) {
    const res = getRoundResults(userOption);
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    roundResultsMsg.innerText = res;
};