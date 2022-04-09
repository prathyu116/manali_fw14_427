import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(0)

  const handleChange=(value)=>{
       setCounter(counter+value )
    }
    const handle=()=>{
      setCounter(counter*2 )
    }

  return (
    <div className="App">
    <h3 className={`${counter%2===0?"red":"green"}`}>Counter: {counter}</h3>
        <button onClick={()=>{handleChange(1)} }> Add </button>

        <button onClick={()=>{
            if(counter>=1){
                handleChange(-1)
            }
        } }> Sub </button>

           
      <button onClick={()=>{handle}} >Double</button>
    </div>
  )
}

export default App
