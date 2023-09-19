import React, { useEffect, useState,useContext } from 'react'
import { ScoreContext } from '../App';
import Bubble from './Bubble'
import Restart from './Restart';

export default function Home() {
    const {score, hit, count, numbers, gameOver}= useContext(ScoreContext);

  return (
    <div>
      <div id="main">
        <div id="pannel">
            <div id="ptop">
                <div className="elem">
                    <h2>Hit</h2>
                    <div className="box">{hit}</div>
                </div>
                <div className="elem">
                    <h2>Time</h2>
                    <div className="box">{count}</div>
                </div>
                <div className="elem">
                    <h2>Score</h2>
                    <div className="box">{score}</div>
                </div>
            </div>
            <div id="pbottom">
                { gameOver ?<Restart/>: numbers.map((element)=>{
                    return(
                        <Bubble element = {element} />
                    )
                })}

            </div>
        </div>
      </div>
    </div>
  )
}
