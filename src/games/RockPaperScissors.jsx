import { useState } from 'react'


const Header = ({ title, instruction, prompt }) => {
    return (
      <div>
        <h1>{title}</h1>
        <p className="instructions">{instruction}</p>
        <p className="prompt">{prompt}</p>
      </div>
    );
  };

const Scoreboard = ({ playerScore, computerScore, winner }) => {
  if(winner == "Player" ){
  return (
    <div id="scoreboard">
      <p>Player Score: <span id="player-score">{playerScore}(Winner!)</span></p>
      <p> Computer Score: <span id="computer-score">{computerScore}</span></p>
    </div>
  );
} else if (winner == "Computer" ){
  return (
    <div id="scoreboard">
<p>Player Score: <span id="player-score">{playerScore}(Winner!)</span></p>
      <p> Computer Score: <span id="computer-score">{computerScore} (Winner!)</span></p>
    </div>
  );

}
return( 
  <div id="scoreboard">
      <p>Player Score: <span id="player-score">{playerScore}</span></p>
      <p> Computer Score: <span id="computer-score">{computerScore}</span></p>
    </div>
);
};


const Choices = ({ choices, onPlayerChoice }) => {
  return (
    <div className="choices">
      {choices.map((choice, index) => (
        <button key={index} onClick={() => onPlayerChoice(choice.name)}>{choice.icon} {choice.name}</button>
      ))
      }
    </div>
  );
};

const Result = ({ result }) => {
  if (!result) {
    return (
      <div id="result">
        <h2></h2>
        {/* If no result yet, leave blank */}
      </div>
    );
  }
  return (
    <div id="result">
      <p>{result.player}</p>
      <p>{result.computer}</p>
      <h2>{result.outcome}</h2>
    </div>
  );
};

const Reset = ({ resetGame }) => {
  return (
    <button id="reset" onClick={() => resetGame()}>Reset Game</button>
  );
};

const Footer = () => {
  return (
    <footer>
      <p> Priyanka 2025</p>
    </footer>
  );
};

const RockPaperScissors = ({updateScore, onSetGameResult}) => {
  const [result, setResult] = useState(null);
  const [winner, setWinner] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = [
    { name: 'Rock', icon: '✊' },
    { name: 'Paper', icon: '✋' },
    { name: 'Scissors', icon: '✌️' },
  ];

  const getComputerChoice = () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
      setWinner('tie');
      return "It's a tie!";
    }

    onSetGameResult('Player chose :${playerchoice.name},computer chose:${computerchoice}.${gameResult}');


    if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      setWinner('player');
      updateScore("Player");
      setPlayerScore((playerScore) => playerScore + 1);
      return 'You win!';
    }
    setWinner('computer');
    updateScore("Computer");
    setComputerScore((computerScore) => computerScore + 1);
    return 'Computer wins!';
  };

  const handlePlayerChoice = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const gameResult = determineWinner(playerChoice, computerChoice);
    // setResult('Player chose :${playerchoice.name},computer chose:${computerchoice}.$gameResult);

    setResult({
      player: `Player chose: ${playerChoice}`,
      computer: `Computer chose: ${computerChoice}`,
      outcome: gameResult,
    });
  };

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setResult(null);
    setWinner(null);
  };

  return (
    <div>
      <Header
        title="Rock-Paper-Scissors Game"
        instruction="Choose Rock, Paper, or Scissors to play against the computer!"
        prompt="You can do it"
      />
      {/* <Scoreboard playerScore={playerScore} computerScore={computerScore} winner={winner} /> */}
      <Choices choices={choices} onPlayerChoice={handlePlayerChoice} />
      <Result result={result} />
      <Reset resetGame={resetGame} />
      <Footer />
    </div>
  );
};

export default RockPaperScissors;