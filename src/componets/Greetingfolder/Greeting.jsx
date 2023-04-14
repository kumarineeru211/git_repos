import React, { useState } from 'react';

export default function Greeting() {
    const greetings =["Happy birthday", "Good Morning", "Good Night", "Good Bye"];
    const [currentGreeting, setcurrentGreeting] = useState(0);
  
    function handleClick () {
      setcurrentGreeting(currentGreeting + 1);
      if (currentGreeting === greetings.length - 1) {
        setcurrentGreeting(0);
      }
    }
  return (
    <div>
      <h1>{greetings[currentGreeting]}</h1>
      <button onClick={handleClick}>Next Greeting</button>
    </div>
  )
}
