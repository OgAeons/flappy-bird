import React, {useState, useEffect} from "react"
import {gameHeight, birdHeight, birdWidth, gravity} from "./Const"

function Bird(props) {
    useEffect(() =>{
        let val
        if (!props.gameOver && props.bird < gameHeight - birdHeight) {
            val = setInterval(() => {
                props.setBird(bird => bird + (gravity))
            }, 25)
        }
        return () => clearInterval(val)
    },[props.GameOver, props.bird])

    return (
        <div className="bird" style={{
            height: birdHeight,
            width: birdWidth,
            top: props.bird,
            left: 100
        }}></div>
    )
}

export default Bird