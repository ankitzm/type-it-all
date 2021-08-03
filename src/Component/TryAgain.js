import React from 'react'

function TryAgain( {words, characters, wpm} ) {
    return (
        <div className="text-2xl">
            <p>Words : {words}</p>
            <p>Characters : {characters}</p>
            <p>WPM : {wpm} wpm</p>
        </div>
    )
}

export default TryAgain
