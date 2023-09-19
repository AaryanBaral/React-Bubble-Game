import React, { useContext } from 'react'
import { ScoreContext } from '../App';

export default function Bubble(props) {
  const {setScore, score, hit, setValue, setNumbers, newHit, setCount} = useContext(ScoreContext);
  const number = props.element;
  const HandelOnClick = ()=>{
    if(number === hit ){
      setScore(score +1);
      setNumbers(setValue());
      newHit();
    }
  }
  return (
    <> 
        <div className="bubble" onClick={HandelOnClick}>{number}</div>
    </>
  )
}
