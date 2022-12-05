import React, { useState } from 'react';
import Battlefield from './Battlefield';
import ScoreBoard from './ScoreBoard';

function App() {

  // const score ={
  //   player: 0,
  //   enemy: 0
  // }



  // function  getScore(playerScr,enemyScr) {
  //  score.player = playerScr,
  //  score.enemy = enemyScr
  // }

  const [enemyScore, setEnemyScore] = useState();
  const [playerScore, setPlayerScore] = useState();

  function getScore(score1, score2) {
    setPlayerScore(score1)
    setEnemyScore(score2)
  }

  return (
    <div className='flex flex-col items-center pt-14'>
      <ScoreBoard playerScore={playerScore} enemyScore={enemyScore}/>
      <Battlefield getScore={getScore}/>
    </div>
  )
}

export default App
