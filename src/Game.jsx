import React, {useState, useEffect} from "react"
import "../src/styles.css"
import {gameHeight, gameWidth, birdHeight, birdWidth, pipeWidth, pipeSpeed, gap, gravity} from "./Const"
import Bird from "./Bird"
import Pipe from "./Pipe"

function Game() {
    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)
    const [pipeHeight, setPipeHeight] = useState(0)
    const [pipePos, setPipePos] = useState(gameWidth)


    return (
        <div className="game-container">
            <div className="game" style={{height: gameHeight, width: gameWidth}}>
                <Pipe 
                    rotated={true}
                    height={pipeHeight}
                    top={0}
                    left={pipePos}
                    gameOver={gameOver}
                    pipePos={pipePos}
                    setPipePos={setPipePos}
                    score={score}
                    setScore={setScore}
                    setPipeHeight={setPipeHeight}
                    
                />
                <Bird 
                    gameOver={gameOver}
                />
                <Pipe 
                    rotated={false}
                    height={gameHeight - gap - pipeHeight}
                    top={pipeHeight + gap}
                    left={pipePos}
                    gameOver={gameOver}
                    pipePos={pipePos}
                    setPipePos={setPipePos}
                    setScore={setScore}
                    setPipeHeight={setPipeHeight}
                    score={score}
                />
            </div>  
        </div>
    )
}

export default Game