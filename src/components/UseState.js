import React, { useState } from 'react'
import './UseState.css';

const UseState = () => {
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    }

    const decrease = () => {
        setCounter(counter - 1);

    }

  return (
    <div className="useState">
        <button onClick={() => increase()}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <h1 className={counter > 0 ? 'green' : 'red'}>{counter}</h1>
    </div>
  )
}

export default UseState;