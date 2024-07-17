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


    useEffect(() => {
        let val
        if (!gameOver && pipePos > -pipeWidth) {
            val = setInterval(() => {
                setPipePos(pipePos => pipePos - pipeSpeed)
            }, 30)
            return () => clearInterval(val)
        } else {
            setPipePos(gameWidth)
            setPipeHeight(Math.floor(Math.random() * (gameHeight - gap)))
            if (!gameOver) {
                setScore(score +1)
            }
        }
    },[gameOver, pipePos])


    return (
        <div className="game-container">
            <div className="game" style={{height: gameHeight, width: gameWidth}}>
                <Pipe 
                    rotated={true}
                    height={pipeHeight}
                    top={0}
                    left={pipePos}
                />
                <Bird 
                    gameOver={gameOver}
                />
                <Pipe 
                    rotated={false}
                    height={gameHeight - gap - pipeHeight}
                    top={pipeHeight + gap}
                    left={pipePos}
                />
            </div>  
        </div>
    )
}

export default Game