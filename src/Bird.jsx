import React, {useState, useEffect} from "react"
import {gameHeight, birdHeight, birdWidth, gravity} from "./Const"

function Bird(props) {
    const [bird, setBird] = useState(300)
     
    useEffect(() =>{
        let val
        if (!(props.gameOver) && bird < (gameHeight) - (birdHeight)) {
            val = setInterval(() => {
                setBird(bird => bird + (gravity))
            }, 30)
        }
        return () => clearInterval(val)
    },[(props.GameOver), bird])

    return (
        <div className="bird" style={{
            height: (birdHeight),
            width: (birdWidth),
            top: bird,
            left: 100
        }}></div>
    )
}

export default Bird