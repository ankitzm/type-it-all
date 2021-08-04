import React from 'react'
import TestLetter from './TestLetter'
import "./TypingChallenge.css"

function TypingChallenge({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    inputHandler
}) {

    return (
        <div className="border-8">
            <div className="text-2xl">
                <div>00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}</div>
                <div>{!timerStarted && "Start typing to start the test"}</div>
            </div>
            <div className="flex flex-row justify-center border-4">
                <div className="text-area">

                    {/* {selectedParagraph} */}
                    {
                        testInfo.map((individualLetterInfo, index) => {
                            return <TestLetter
                                key={index}
                                individualLetterInfo={individualLetterInfo}
                            />
                        })
                    }

                </div>
                <textarea
                    onChange={(e) => inputHandler(e.target.value)}
                    className="text-area resize-none"
                    placeholder="Start typing here"
                />

            </div>
        </div>
    )
}

export default TypingChallenge
