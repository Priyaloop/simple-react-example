import {useState} from "react";

function Counter1() {
    // let count = 0; // Plain variable, React doesn't track changes
    const [count, setCount] = useState(0);
    const increment = () => {
      // count += 1; // Increment the count
      setCount(count + 1);
      console.log(count); 
    };
  
    return (

      <div>
        <h1>Counter: {count}</h1>
        <button onClick={increment}>Increment</button>
      </div>
    );
  }
const Result = ({ result }) => {
if (!result) {
return (
<div id="result">
    <h2>No result yet!</h2>
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


  const App = () => {
     const choices = [
    { name: 'Rock', icon: '✊' },
    { name: 'Paper', icon: '✋' },
    { name: 'Scissors', icon: '✌' },
    ];
    const [result, setResult] = useState(null);
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const handlePlayerChoice = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const gameResult = determineWinner(playerChoice.name, computerChoice);
    // Update scores

    if (gameResult === "You win!") {
    setPlayerScore(playerScore + 1);
    } else if (gameResult === "Computer wins!") {
    setComputerScore(computerScore + 1);
    }

    setResult({
    player: `Player chose: ${playerChoice.name}`,
    computer: `Computer chose: ${computerChoice}`,
    outcome: gameResult,
    });
    console.log(result);

    };
    return (
    <div>

<Header
title="Rock-Paper-Scissors Game"
instructions="Choose Rock, Paper, or Scissors to play against the computer!"/>
<Scoreboard playerScore={playerScore} computerScore={computerScore} />
<Choices choices={gameChoices} onPlayerChoice={handlePlayerChoice} />
<Result result={result} />
<button id="reset" onClick={() => {
setResult(null);
setPlayerScore(0);
setComputerScore(0);
 }}>Reset Game</button>
 </div>
 );

};
export default App;


