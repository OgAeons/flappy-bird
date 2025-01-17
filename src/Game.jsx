import React, {useState, useEffect} from "react"
import "../src/styles.css"
import {gameHeight, gameWidth, birdHeight, birdWidth, pipeWidth, pipeSpeed, gap, gravity} from "./Const"
import Bird from "./Bird"
import Pipe from "./Pipe"

function Game(props) {
    const [gameOver, setGameOver] = useState(false)
    const [bird, setBird] = useState(300)
    const [pipeHeight, setPipeHeight] = useState(0)
    const [pipePos, setPipePos] = useState(gameWidth - pipeWidth)

    useEffect(() => {
        let topPipe = bird >=0 && bird < pipeHeight
        let bottomPipe = 
            bird <= gameHeight &&
            bird >= gameHeight - (gameHeight - gap - pipeHeight) - birdHeight

        if ( pipePos >= pipeWidth && pipePos <= pipeWidth + 80 && (topPipe || bottomPipe)) {
            setGameOver(true)
            setBird(300)
            props.setScore(0)
        }
    }, [bird, pipeHeight, pipePos])

    useEffect(() => {
        function handleKey(event) {
            if (event.code === "Space" || event.type === "click") {
                if (gameOver) {
                    setGameOver(false)
                    setBird(300+gravity)
                }
                else if (bird < birdHeight) setBird(0)
                else setBird(bird => bird - 60)
            }
        }
        window.addEventListener("keydown", handleKey);
        window.addEventListener("click", handleKey);

        return () => {
          window.removeEventListener("keydown", handleKey);
          window.removeEventListener("click", handleKey);
        };
    }, [gameOver, bird])


    return (
        <div className="game-container">
            {gameOver ? <div className="game-over">GAMEOVER!! Press Space or click to Start</div> : null}
            <div className="game" style={{height: gameHeight, width: gameWidth}}>
                <Pipe 
                    rotated={true}
                    height={pipeHeight}
                    top={0}
                    left={pipePos}
                    gameOver={gameOver}
                    pipePos={pipePos}
                    setPipePos={setPipePos}
                    score={props.score}
                    setScore={props.setScore}
                    setPipeHeight={setPipeHeight}
                    
                />
                <Bird 
                    gameOver={gameOver}
                    bird={bird}
                    setBird={setBird}
                />
                <Pipe 
                    rotated={false}
                    height={gameHeight - gap - pipeHeight}
                    top={pipeHeight + gap}
                    left={pipePos}
                    gameOver={gameOver}
                    pipePos={pipePos}
                    setPipePos={setPipePos}
                    score={props.score}
                    setScore={props.setScore}
                    setPipeHeight={setPipeHeight}
                />
            </div>  
        </div>
    )
}

export default Game