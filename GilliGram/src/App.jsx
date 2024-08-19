import { useState } from 'react'
import Guess from './components/guess'
import Qwerty from './components/qwerty'
import WinLoss from './components/winLoss'


function App() {
  

  return (
    <>
    <div className='flex w-screen h-screen bg-indigo-300 flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-purple-500'>GilliGram</h1>  
      
      {new Array(6).fill(0).map((_,i)=> <Guess correctWord = {"tests"} guess = {"guess"} isGuessed = {false} />)}      
      <Qwerty /> 
      <h2>Win Loss</h2>
      </div>
    </>
  )
}

export default App
