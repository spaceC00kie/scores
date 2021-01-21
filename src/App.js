import logo from "./logo.svg"
import "./App.css"
import Scores from "./components/Scores"
import React, { useState } from "react"

function App() {
  const [score, setScore] = useState(5)
  const upClick = () => {
    setScore(score + 1)
  }
  const downClick = () => {
    setScore(score - 1)
  }
  return <div>
    <Scores subscore={score} downClick={downClick} upClick={upClick}/>
    <Scores subscore={score} downClick={downClick} upClick={upClick}/>
    <Scores subscore={score} downClick={downClick} upClick={upClick}/>
  </div>
}

export default App
