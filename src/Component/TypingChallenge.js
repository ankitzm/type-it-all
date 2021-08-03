import React from 'react'
import "./TypingChallenge.css"

function TypingChallenge({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
}) {
    return (
        <div className="border-8">
            <div className="text-2xl">
                <div>00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}` }</div>
                <div>{!timerStarted && "Start typing to start the test"}</div>
            </div>
            <div className="flex flex-row justify-center border-4">
                <div className="text-area">
                    {selectedParagraph}
                </div>
                <textarea className="text-area resize-none"></textarea>

            </div>
        </div>
    )
}

export default TypingChallenge
