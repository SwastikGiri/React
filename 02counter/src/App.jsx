import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]=useState(10)
  const incrementVal = () =>{
    if(counter<20){
    setCounter(counter+1)
    }
  }
  const decrementVal = () =>{
    if(counter>0){
    setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={incrementVal}
      >Increment value {counter}</button>
      <br />
      <button
      onClick={decrementVal}
      >Decrement value {counter}</button>
    </>
  )
}

export default App
