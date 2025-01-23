


const GameSelector = ({onGameSelect}) => {
    return (
      <div>
        <h2>Select a Game</h2>
        <button onClick = {() => onGameSelect("RockPaperScissors")}>Rock-Paper-Scissors</button>
        <button onClick = {() => onGameSelect("HigherOrLower")}>Higher or Lower Guessing Game</button>
        <button onClick = {() => onGameSelect("Hangman")}>Hangman game</button>
        <button onClick = {() => onGameSelect("TriviaGame")}>TriviaGame</button>


      </div>
    );
  }; 

  export default GameSelector;

