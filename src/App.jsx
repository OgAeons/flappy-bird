import React, {useState} from "react"
import Game from "./Game"

function App() {
    const [score, setScore] = useState(0)

    return (
        <div>
            <h1>Flappy Bird</h1>
            <h3>Score : {score}</h3>
            <Game score={score} setScore={setScore}/>
        </div>
    )
}

export default App