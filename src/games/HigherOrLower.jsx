import React, { useState } from "react";

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
      <h2>{result}</h2>
    </div>
  );
};

const HigherOrLower = ({updateScore,onSetGameResult}) => {
  const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
  const [currentNumber, setCurrentNumber] = useState(generateRandomNumber());
  const [result, setResult] = useState("");
  const handleGuess = (guess) => {
    const newNumber = generateRandomNumber();

if (guess === "higher" && newNumber > currentNumber) {
  updateScore("Player");
  onSetGameResult("You guessed correct!")
  console.log("You guessed correct!");
  setResult("You guessed correct!")


} else if (guess === "lower" && newNumber < currentNumber) {
  updateScore("Player");
  onSetGameResult("You guessed correct!")
  console.log("You guessed correct!");
  setResult("You guessed correct!")


} else {
  updateScore("Computer");
  console.log("You guessed wrong!");
  onSetGameResult("You guessed wrong!");
  setResult("You guessed wrong!");

}
  setCurrentNumber(newNumber); 
  };

  return (
    <div>
      <h1>Higher or Lower</h1>
      <p>Current Number: {currentNumber}</p>
      <div>
        <button onClick={() => handleGuess("higher")}>Higher</button>
        <button onClick={() => handleGuess("lower")}>Lower</button>
      </div>
      <Result result={result} />
    </div>
  );
};

export default HigherOrLower;
