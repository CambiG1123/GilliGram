import React from 'react'

const qwerty = ({guessedLetters, correctWord}) => {
  return (
    <div>
      <div className='flex flex-row '>
        {new Array(26).fill(0).map((_,i)=> <div className='h-10 w-10 border border-white bg-indigo-100  flex justify-center items-center text-2xl font-bold'>{String.fromCharCode(65+i)}</div>)}
      </div>
    </div>
  )
}

export default qwerty