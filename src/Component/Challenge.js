import React from 'react'
import "./Challenge.css"
import TestContainer from './TestContainer'

function Challenge({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    inputHandler,
    startAgain
}) {
    return (
        <div className=" bg-green-300 flex flex-col justify-center items-center" >
            <div className="text-2xl mx-auto my-16">
                Take a speed test now !!
            </div>
            <div className="challenge bg-gray-50 mb-16">
                <TestContainer
                    selectedParagraph={selectedParagraph}
                    words={words}
                    characters={characters}
                    wpm={wpm}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                    testInfo={testInfo}
                    inputHandler={inputHandler}
                    startAgain={startAgain}
                />
            </div>
        </div>
    )
}

export default Challenge
