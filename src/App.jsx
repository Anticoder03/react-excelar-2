import React from 'react'
import {useState} from 'react'
import Button from './components/Button'
const App = () => {
  let [count, setCount] = useState(0)
  
  const incrementByOne = () => {
    setCount(count + 1)
    console.log(count)
  }
  const decrementByOne = () => {
    setCount(count - 1)
  }
  const incrementByTwo = () => {
    setCount(count + 2)
  }
  const decrementByTwo = () => {
    setCount(count - 2)
  }
  return (
    <div>

      <h1 className="counter">{count}</h1>

      <Button text="increment by 1" handleClick={incrementByOne} backgroundColor="green" />
      <Button text="decrement by 1" handleClick={decrementByOne} backgroundColor="red" />
      <Button text="increment by 2" handleClick={incrementByTwo} backgroundColor="lightgreen" />
      <Button text="decrement by 2" handleClick={decrementByTwo} backgroundColor="lightcoral" />
    </div>
  )
}

export default App
