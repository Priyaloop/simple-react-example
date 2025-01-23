import { useState } from 'react'
const wordList = [
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Grasshopper",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stork",
    "Swallow",
    "Swan",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Yak",
    "Zebra"
];

// Generates a random word from the word list.
const randomSecretWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex].toLowerCase();
};

// Displays the keyboard for the player to make guesses.
const Keyboard = ({onBtnClick}) => {
    const buttons = "abcdefghijklmnopqrstuvwxyz".split('');
    return (
        <p className="hangman-keyboard"> 
        {buttons.map((letter)=>{
            return (
                <button className="hangman-button" onClick={onBtnClick} key={letter} value={letter}>{letter}</button>
            )
           
        })}
        </p>
        )
};

// Displays the current guessed word with correct letters filled in.
const GuessedWord =({guessedWord}) => {
    return (
            guessedWord.map((letter,index)=> {
            return (
                <span className="hangman-word" key={index}> {letter} </span>
            )
        })
    )
  };
  const Result = ({ wrongCount, result }) => {
    return (
        <div>
            <p> Wrong Guesses: {wrongCount}</p>
            <p>{result}</p>
        </div>
    );
};
  

// Main Hangman game component.
const Hangman = () => {
    const [secretWord, setSecretWord] = useState(randomSecretWord());
    const [guessedWord, setGuessedWord] = useState(new Array(secretWord.length).fill('-'));
    const [wrongCount, setWrongCount] = useState(0);
    const [result, setResult] = useState('-');

    // Resets the game to start over with a new word.
    const resetGame = () => {
    const newSecretWord = randomSecretWord();
    setSecretWord(newSecretWord);
    setGuessedWord(new Array(newSecretWord.length).fill('-'));
    setWrongCount(0);

    //set a new secretWord
    //set a new guessedWord
        
    };

    // Handles letter clicks and updates the guessed word or wrong count.
    const handleClick = (event) => {
        const guessedLetter = event.target.value.toLowerCase();
        let newGuessedWord = [...guessedWord];

        if (secretWord.includes(guessedLetter)) {
            for (let i = 0; i < secretWord.length; i++) {
                if (secretWord[i] === guessedLetter) {
                    newGuessedWord[i] = guessedLetter;
                }
            }
            setGuessedWord(newGuessedWord);

            // Complete the code here:
            // - Update the guessedWord array by replacing the dash ('-') with the correct letter at the appropriate positions.
            // - Ensure the updated guessedWord array is passed as props to the GuessedWord component for display.

        } else {
            setWrongCount(prevWrongCount => prevWrongCount + 1);
            if (wrongCount + 1 >= 5) {
                setResult(`Game Over! The word was: ${secretWord}`);
                return;
            }
        }
        if (!newGuessedWord.includes('-')) {
            setResult("Congratulations, You Won!");
        }
    };
            // Track the number of wrong guesses:
            // - Increment the wrongCount state whenever the guessed letter is not in the secretWord.
            // - If the wrongCount reaches 5 or more, display a message indicating that the player has lost the game.
    return(
        <div>

             {/* Complete other components rendering */}
            <h1>Hangman Game</h1>
            <GuessedWord guessedWord = {guessedWord}/>
            <br />
            <Keyboard onBtnClick={handleClick}/>
            <button onClick={resetGame}>Reset Game</button>
            <Result wrongCount={wrongCount} result={result} />

        </div>
    )
};


export default Hangman;
