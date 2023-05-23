import React from 'react'

function Home({firstNam,lastNam,dataclean}) {
  return (
    <div><h1>Welcome to home page </h1>
     <h2> Your Name :){firstNam} {lastNam}</h2>
    <button onClick={dataclean}>Allclear</button>
    </div>
    
  )
}

export default Home