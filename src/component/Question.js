import React,{useState,useRef} from 'react'
import Navbar from './Navbar'
import question from './navbar.module.css'

export default function Question() {
    const[count,setCount]=useState(0)
    const[input,setInput]=useState("")

    const number = useRef(Math.round(Math.random()*100));
    console.log(number)
function handleChange(){
    if(input>number.current){
        alert("You guessed a bigger number .")
    }
    else if(input<number.current){
        alert("You guessed a smaller number .")
    }
    else{
        alert(`congratulations you guessed the right number in ${count+1} attempts`)
    }
    setInput(input)
    setCount(count+1)
}

  return (
    <>
    <Navbar/>
      <div className={question.main}>
        <h1>Lucky Number Game</h1>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}  placeholder="Guess Lucky Number..."/>
        <button onClick={handleChange} >Match Number</button>
        <h3> You get the answer in {count} Times!!</h3>
      </div>
    </>
  )
}
