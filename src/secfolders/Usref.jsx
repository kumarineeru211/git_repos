import {useState,useRef,React} from 'react'

export default function Usref() {
    const refElement = useRef(" ")
    const[name , setName]=useState('yogita')
    function Reset (){
        setName(" ")
        refElement.current.focus()
    }
    function clickstyle(){
        refElement.current.style.color='red'
        refElement.current.value='neeru'
    }

  return (
    <>
    <h1>useRef use </h1>
    <input type='text' ref={refElement} value={name} onChange={(e)=>setName(e.target.value)}/>
    <button onClick={Reset}>Reset</button>
    <button onClick={clickstyle}>clickchange</button>

    </>
  )
}
