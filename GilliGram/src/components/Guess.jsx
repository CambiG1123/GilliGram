import React from 'react'

const guess = ({correctWord, guess, setGuess, guessedLetters,  isGuessed, }) => {
  return (
    <div className='grid grid-cols-5 gap-2 mb-2 '>
      {new Array(5).fill(0).map((_,i)=>{
        const bgColor = !isGuessed 
        ? 'bg-indigo-100' 
        : guess[i] === correctWord[i] 
        ? 'bg-green-500' 
        : correctWord.includes(guess[i]) 
        ? 'bg-yellow-500' 
        : 'bg-indigo-100'
        return(
          <div className={`h-16 w-16 border border-white ${bgColor}  flex justify-center items-center text-2xl font-bold`}>
            {guess[i]}
          </div>
        )
      } )}
    </div>
  )
}

export default guess