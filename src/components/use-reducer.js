import React, { useReducer } from "react"

export default () => {
  const max = 100
  const min = 0

  const counterReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        if (state === max) return max
        return state + 1

      case "DECREMENT":
        if (state === min) return min
        return state - 1

      case "SET_TO_MIN":
        return min

      case "SET_TO_MAX":
        return max

      default:
        return state
    }
  }
  const [counter, dispatch] = useReducer(counterReducer, min)

  return (
    <section>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="button button-blue"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="button button-blue"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "SET_TO_MIN" })}
        className="button button-blue"
      >
        Set to min
      </button>
      <button
        onClick={() => dispatch({ type: "SET_TO_MAX" })}
        className="button button-blue"
      >
        Set to max
      </button>
    </section>
  )
}
