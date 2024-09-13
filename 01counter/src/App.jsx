import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter] = useState(0);
const addvalue=()=>{
  setCounter(counter+1)
}

const removevalue = ()=>{
  if(counter>0)
  setCounter(counter-1)
else
setCounter(0)
}

  return (
    <>
    <h2>counter-value:{counter}</h2>
    <button onClick={addvalue}>ADD</button>
    <br/>
    <button onClick={removevalue}>REMOVE</button>
    <footer>footer:{counter}</footer>
    </>
  )
}

export default App
