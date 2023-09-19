import { createContext, useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';

const ScoreContext = createContext();
function App() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [count, setCount] = useState(60);
  const  [hit, setHit] = useState(Math.floor(Math.random()*10));
  const [numbers, setNumbers] = useState(setValue());


  function setValue(){
    let arr = [];
    for(let i = 0; i<144; i++){
        arr.push(Math.floor(Math.random()*10));
    }
    return arr;
    
  }  

  const newGame = ()=>{
    setGameOver(false);
    newHit();
    setCount(60);
    setScore(0);
    setNumbers(setValue());
  }


  function newHit(){
    setHit(Math.floor(Math.random()*10))
  }
    
  useEffect(()=>{
    const current = setInterval(function(){
        if(count>0){
            setCount((prev)=>{
                return prev-1;
            })
        }
        else{
          setGameOver(true);
            clearInterval(current)
        }
    },1000);
    return ()=>{
        clearInterval(current)
    }
},[count])
  return (
  <>
    <ScoreContext.Provider value ={{score,setScore, hit, setHit, 
      count, setCount, numbers, setValue, setNumbers, newHit, gameOver,
      setGameOver, newGame}}>

      <Home/>  

    </ScoreContext.Provider>
  </>
  );
}

export default App;
export {ScoreContext}
