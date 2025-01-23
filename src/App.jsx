import { useState } from 'react'
import './App.css';
import RockPaperScissors from './games/RockPaperScissors.jsx';
import HigherOrLower from './games/HigherOrLower';
import GameSelector from  './components/GameSelector';
import Scoreboard from  './components/Scoreboard';
import Result from  './components/Result';
import Hangman from './games/hangman';
import TriviaGame from './games/TriviaGame';








const App= () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [playerScore, setPlayerScore] = useState(null);
  const [computerScore, setcomputerScore] = useState(null);
  const [gameResult, SetGameResult] = useState(null);

  const updateScore = (Winner) => {
    if (Winner =="Player") {
      setPlayerScore(playerScore+1);
    }else if (Winner == "Computer"){
      setcomputerScore(computerScore+1);

    }
    };
  console.log(selectedGame);
    
  return(
    <div>
      <h1>Speed Play Zone!!</h1>
      <Scoreboard playerScore={playerScore} computerScore={computerScore}/>
<Result result ={gameResult}/>
<hr/>
      <GameSelector onGameSelect={setSelectedGame}/>
      {selectedGame=== "RockPaperScissors"&& <RockPaperScissors updateScore={updateScore} onSetgameResult={SetGameResult}/>}
      {selectedGame=== "HigherOrLower"&& <HigherOrLower updateScore={updateScore} onSetgameResult={SetGameResult}/>}
      {selectedGame=== "Hangman"&& <Hangman/>}
      {selectedGame=== "TriviaGame"&& <TriviaGame/>}

 


      {!selectedGame && <p>Please select a game to start playing!</p>}
    </div>
  );
}
export default App;
