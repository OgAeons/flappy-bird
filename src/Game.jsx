import React, {useState, useEffect} from "react"
import "../src/styles.css"
import Bird from "./Bird"
import Pipe from "./Pipe"

function Game() {
    const gameHeight = 600
    const gameWidth = 350
    const birdHeight = 24
    const birdWidth = 34
    const pipeWidth = 52
    const pipeSpeed = 5
    const gap = 200
    const gravity = 5

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
                    width={pipeWidth}
                    top={0}
                    left={pipePos}
                />
                <Bird 
                    gameOver={gameOver}
                    gameHeight={gameHeight}
                    birdHeight={birdHeight}
                    birdWidth={birdWidth}
                    gravity={gravity}
                />
                <Pipe 
                    rotated={false}
                    height={gameHeight - gap - pipeHeight}
                    width={pipeWidth}
                    top={pipeHeight + gap}
                    left={pipePos}
                />
            </div>  
        </div>
    )
}

export default Game