import React, {useState, useEffect} from "react"
import "../src/styles.css"
import Bird from "./Bird"

function Game() {
    const gameHeight = 600
    const gameWidth = 350
    const birdHeight = 24
    const birdWidth = 34
    const pipeWidth = 52
    const gap = 200
    const gravity = 5

    const [gameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)
    const [pipeHeight, setPipeHeight] = useState(0)
    const [pipePos, setPipePos] = useState(gameWidth)


    return (
        <div className="game-container">
            <div className="game" style={{height: gameHeight, width: gameWidth}}>
                <div className="pipe" style={{
                    height: pipeHeight,
                    width: pipeWidth,
                    transform: "rotate(180deg)",
                    left: pipePos,
                    top: 0
                }}></div>
                <Bird 
                    gameOver={gameOver}
                    gameHeight={gameHeight}
                    birdHeight={birdHeight}
                    birdWidth={birdWidth}
                    gravity={gravity}
                />
                <div className="pipe" styles={{
                    height: gameHeight - gap - pipeHeight,
                    width: pipeWidth,
                    transform: "rotate(0deg)",
                    top: pipeHeight + gap,
                    left: pipePos
                }}></div>
            </div>  
        </div>
    )
}

export default Game