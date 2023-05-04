import React,{useState} from 'react'
import './calsi.css'

export default function Calsi() {
    const[result,setResult]=useState("")

    const handleAnswere =(e)=>{
       setResult(result.concat(e.target.value))
    }

    const clearDisplay = ()=>{
        setResult("")
    } 
    const calculate =()=>{
        setResult(eval(result).toString())

    }

  return (
    <div className='calc'>
        <input type='text' placeholder='0' id='answere'  value={result}/>
        <input type='text' value='9' className='button' onClick={handleAnswere}/>
        <input type='text' value='8' className='button' onClick={handleAnswere}/>
        <input type='text' value='7' className='button' onClick={handleAnswere}/>
        <input type='text' value='6' className='button' onClick={handleAnswere}/>
        <input type='text' value='5' className='button' onClick={handleAnswere}/>
        <input type='text' value='4' className='button' onClick={handleAnswere}/>
        <input type='text' value='3' className='button' onClick={handleAnswere}/>
        <input type='text' value='2' className='button' onClick={handleAnswere}/>
        <input type='text' value='1' className='button' onClick={handleAnswere}/>
        <input type='text' value='0' className='button' onClick={handleAnswere}/>
        <input type='text' value='.' className='button' onClick={handleAnswere}/>
        <input type='text' value='+' className='button' onClick={handleAnswere}/>
        <input type='text' value='-' className='button' onClick={handleAnswere}/>
        <input type='text' value='*' className='button' onClick={handleAnswere}/>
        <input type='text' value='/' className='button' onClick={handleAnswere}/>
        <input type='text' value='%' className='button' onClick={handleAnswere}/>
        <input type='text' value='clear' className='button button1' onClick={clearDisplay} />
        <input type='text' value='=' className='button button1' onClick={calculate}/>
        
    </div>
  )
}
