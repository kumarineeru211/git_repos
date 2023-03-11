import {useState,React} from 'react'


export default function Count() {
    const [text , setText]= useState('')
    const[list,setList]= useState([]);

    function handleonChange(event){
        setText(event.target.value)
    }
    function handleAdd(){
        setList([...list,text]);
        setText('');
    }

  return (
    <>
    <h1>add button with test updated</h1>
    <input type='text' value={text} onChange={handleonChange}/>
    <button onClick={handleAdd} style={{marginleft:'10px'}}>Add</button>
     <ul>
        {list.map((elem,index)=>{
          return (
            <li key={index}>{elem}</li>
          )  
        })}
     </ul>
    </>
  )
}
