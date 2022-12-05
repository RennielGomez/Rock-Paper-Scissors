import React from 'react';

function ScoreBoard({enemyScore, playerScore}) {
 
  

  return (
    <div className='inline-flex rounded-md border-2 border-slate-400 p-3 mx-auto'>
      <div className='flex flex-col font-bold text-white'>
        <span className='text-3xl leading-6 text-slate-200'>Rock</span>
        <span className='text-3xl leading-6 text-slate-200'>Paper</span>
        <span className='text-3xl leading-6 text-slate-200'>Scissors</span>
      </div>
      <div className='flex flex-col bg-white rounded-md items-center justify-center px-8 py-2 ml-72'>
        <span className='text-xs font-semibold score-text leading-3'>PLAYER</span>
        <span className='font-bold text-6xl text-slate-600'>{playerScore}</span>
      </div>
      <div className='flex flex-col bg-white rounded-md items-center justify-center px-8 py-2 ml-2'>
        <span className='text-xs font-semibold score-text leading-3'>ENEMY</span>
        <span className='font-bold text-6xl text-slate-600'>{enemyScore}</span>
      </div>
    </div>
  )
}

export default ScoreBoard