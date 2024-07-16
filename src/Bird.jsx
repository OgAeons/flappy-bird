import React, {useState, useEffect} from "react"

function Bird(props) {
    const [bird, setBird] = useState(300)
     
    useEffect(() =>{
        let val
        if (!(props.gameOver) && bird < (props.gameHeight) - (props.birdHeight)) {
            val = setInterval(() => {
                setBird(bird => bird + (props.gravity))
            }, 30)
        }
        return () => clearInterval(val)
    },[(props.GameOver), bird])

    return (
        <div className="bird" style={{
            height: (props.birdHeight),
            width: (props.birdWidth),
            top: bird,
            left: 100
        }}></div>
    )
}

export default Bird