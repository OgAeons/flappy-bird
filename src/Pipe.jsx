import React from "react"

function Pipe(props) {
    return (
        <div className={`pipe ${props.rotated ? 'rotated' : null}`} style={{
            height: props.height,
            width: props.width,
            top: props.top,
            left: props.left
        }}></div>
    )
}

export default Pipe