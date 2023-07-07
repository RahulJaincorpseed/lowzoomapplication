import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearch } from "rsuite/esm/Picker"
import {
  Increment,
  decrementAction,
  incrementAction,
} from "../Redux/Actions/CounterAction"

const Counter = () => {
  const [count, setCount] = useState(0)
  const counterData = useSelector((state) => state.counterReducer)
  console.log("counetre", counterData)
  const dispatch = useDispatch()

  //    console.log();
  // const currentUser = useSelector(state => state.currentUser)

  // const Increment = () =>{
  //     setCount((count)=> count +1);
  // }
  // const Decrement = () =>{
  //     setCount((count)=> count - 1);
  // }

  return (
    <div className="container p-5">
      <h1>{counterData}</h1>
      <button
        onClick={() => dispatch(incrementAction(1))}
        className="btn btn-primary mr-3"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrementAction(1))}
        className="btn btn-primary"
      >
        Decrement
      </button>
    </div>
  )
}

export default Counter
