import React from "react"
import {gameHeight, gameWidth, birdHeight, birdWidth, pipeWidth, pipeSpeed, gap, gravity} from "./Const"

function Pipe(props) {
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