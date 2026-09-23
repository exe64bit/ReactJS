import React, { useState } from 'react'

function Counter() {
  let [count, setCount] = useState(0)
  
  return (
    <div>
      {console.log("Render")}
      <h1>Count in {count}</h1>
      <button onClick={()=>{
        setCount((prev)=> prev+1)
        setCount((prev)=> prev+1)
        setCount((prev)=> prev+1)
      }}>Incriment</button>
    </div>
  )
}

export default Counter