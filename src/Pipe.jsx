import React, {useEffect} from "react"
import {gameHeight, gameWidth, pipeWidth, pipeSpeed, gap} from "./Const"

function Pipe(props) {
    useEffect(() => {
        let val
        if (!props.gameOver && props.pipePos > -pipeWidth) {
            val = setInterval(() => {
                props.setPipePos(pipePos => pipePos - pipeSpeed)
            }, 30)
            return () => clearInterval(val)
        } else {
            props.setPipePos(gameWidth)
            props.setPipeHeight(Math.floor(Math.random() * (gameHeight - gap)))
            if (!props.gameOver) {
                props.setScore(props.score +1)
            }
        }
    },[props.gameOver, props.pipePos])


    return (
        <div className={`pipe ${props.rotated ? 'rotated' : null}`} style={{
            height: props.height,
            width: pipeWidth,
            top: props.top,
            left: props.left
        }}></div>
    )
}

export default Pipe