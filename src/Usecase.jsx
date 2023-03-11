import {useState,React} from 'react'

export default function Usecase() {
    // let count = 1;
    
    const [count , setCount] = useState(0);
    const [data , setData] = useState('Amit')

     function handleOnClick(){
    //     // count = count+1;
    //     // console.log(count)
       
            setCount(count+1) 
     }
     function handleDec(){
        setCount(count-1)
     }

     function changeName(){
        if(data == 'Amit'){
            setData('Rajan')

        }else {
          setData('Amit');
     }
       
         
     } 

  return (
    <>
      <p>{data}</p>
      <button onClick={changeName}>click Name </button>
     <p>{count}</p> 
     <button onClick={handleOnClick}>click increment</button> 
      
     <button onClick={handleDec}>click decrement </button>
    </>
  )
}
