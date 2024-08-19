import React from 'react'

const guess = ({correctWord, guess, isGuessed}) => {
  return (
    <div className='grid grid-cols-5 gap-2 mb-2 '>
      {new Array(5).fill(0).map((_,i)=> <div className='h-16 w-16 border border-white bg-indigo-200 flex justify-center items-center text-2xl font-bold'>{guess[i]}</div>)}
    </div>
  )}

export default guess