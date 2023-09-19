import React, { useContext } from 'react'
import { ScoreContext } from '../App';

export default function Restart() {
    const {newGame, score} = useContext(ScoreContext);
    const StartGame=()=>{
        newGame();
    }
  return (
      <div className="options">
        <div id="time-over">
            <h2>Time Over</h2>
            <p>Your total Score was: {score}</p>
        </div>
        <div className="restart" onClick={StartGame}>Restart</div>
        
      </div>
  )
}
