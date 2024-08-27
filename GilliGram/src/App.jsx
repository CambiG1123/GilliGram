import { useState, useEffect } from "react";
import Guess from "./components/guess";
import Qwerty from "./components/Qwerty";
import WinLoss from "./components/winLoss";
import words from "./words.json";
import guess from "./components/guess";

function App() {
  const [correctWordState, setCorrectWord] = useState([]);
  const [guessState, setGuess] = useState("");
  const [isGuessedState, setIsGuessed] = useState(false);
  const [guessedLettersState, setGuessedLetters] = useState([]);

  useEffect(() => {
    const randomWord =
      words[Math.floor(Math.random() * words.length)].split("");
    setCorrectWord(randomWord);
  }, []);

  const onGuessSubmit = (guessInput) => {
    guessArray = guessInput.split("");
    guessArray.forEach((letter) => {
      if (
        correctWordState.includes(letter) &&
        guessArray.indexOf(letter) === correctWordState.indexOf(letter)
      ) {
        setGuessedLetters(...guessedLettersState, { [letter]: "correct" });
      }
    });
  };
  return (
    <>
      <div className="flex w-screen h-screen bg-indigo-300 flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-purple-500">
          GilliGram
        </h1>

        {new Array(6).fill(0).map((_, i) => (
          <Guess
            correctWord={correctWordState}
            guess={guessState}
            setGuess={setGuess}
            guessedLetters={guessedLettersState}
            isGuessed={isGuessedState}
            setIsGuessed = {setIsGuessed}
          />
        ))}
        <Qwerty
          guessedLetters={guessedLettersState}
          setGuessedLetters={setGuessedLetters}
          correctWord={correctWordState}
          setCorrectWord={setCorrectWord}
          guess={guessState}
          setGuess={setGuess}
          isGuessed={isGuessedState}
          setIsGuessed = {setIsGuessed}

        />
        <h2>Win Loss {correctWordState}</h2>
      </div>
    </>
  );
}

export default App;
