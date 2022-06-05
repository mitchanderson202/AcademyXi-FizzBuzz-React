import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const Increment = () => {
  setCount(count + 1);
  }

  const Decrement = () => {
    setCount(count - 1);
  }

  const Reset = () => {
    setCount(1);
  }


  return (
    <div>
    <button onClick={Increment}>+</button>
    <h1>{
      count % 15 === 0 ? "FizzBuzz" :
      count % 3 === 0 ? "Fizz" :
      count % 5 === 0 ? "Buzz" :
      count    
    }</h1>
    <button onClick={Decrement}>-</button>
    <button onClick={Reset}>Reset</button>
    </div>
    )
}

export default App;