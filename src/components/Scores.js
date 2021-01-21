import React, { useState } from "react"

const Scores = (props) => {
  //const [score, setScore] = useState(5)

  return (
    <div>
      <button
        onClick={() => {
          //setScore(props.subscore - 1)
          props.downClick()
        }}
      >
        Subtract
      </button>
      {props.subscore}
      <button
        onClick={() => {
          //setScore(props.subscore + 1)
          props.upClick()
        }}
      >
        Add
      </button>
    </div>
  )
}

export default Scores
