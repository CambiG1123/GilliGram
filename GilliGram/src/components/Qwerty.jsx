import React, { useEffect } from 'react'
import guess from './guess';

const qwerty = ({guessedLetters, setGuessedLetters, correctWord, setCorrectWord, guess, setGuess, isGuessed, setIsGuessed}) => {
  const rows = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Z','X','C','V','B','N','M',],
    ['Enter','Back']
  ];

  
  const handleClick = (letter) => {
    console.log(letter)
    if (letter !== 'Enter' && letter !== 'Back') {
      
      setGuessedLetters([...guessedLetters, {[letter]: 'unGuessed'}]);
      setGuess(guess += letter)
      
    }else if (letter === 'Enter' && guess.length === correctWord.length) {
      setIsGuessed(true)
  }
}
useEffect(() => {console.log(guessedLetters)}, [guessedLetters])
  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center mb-2">
          {new Array(row.length).fill(0).map((_, i) => {
           const letter = row[i];
           
            const symbolWidth = (letter === 'Enter' || letter === 'Back') ? 'w-20' : 'w-10';
            return (
              <div
                key={letter}
                className={`h-10 ${symbolWidth} border border-white bg-indigo-100 flex justify-center items-center ml-2 text-2xl font-bold`}
                onClick={() => handleClick(letter)}
                
              >
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default qwerty