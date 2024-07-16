import React from "react"
import "../src/styles.css"

function Game() {
    return (
        <div className="game-container">
            <div className="game">
                <div className="pipe"></div>
                <div className="bird"></div>
                <div className="pipe"></div>
            </div>  
        </div>
    )
}

export default Game