import React, { useState } from 'react'

function Counter() {

    const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <div>
        <span>{count}</span>
      </div>
      <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>Reset</button>
      </div>
    </>
  );
}

export default Counter