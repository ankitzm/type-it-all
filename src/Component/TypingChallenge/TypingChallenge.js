import React from 'react';
import TestLetter from './../TestLetter';
import "./TypingChallenge.css";

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
        <div className="mt-4">
            <div className="font-semibold">
                <div className="text-4xl">00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}</div>
                <div className="text-2xl mt-2 delay-500">{!timerStarted && "Start typing to start the test"}</div>
            </div>
            <div className="flex flex-row justify-center text-sm md:text-2xl leading-5">
                <div className="text-area test-area overflow-y-auto hover:shadow-">

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
                    className="text-area resize-none hover:shadow-md"
                    placeholder="Start typing here"
                />

            </div>
        </div>
    )
}

export default TypingChallenge;
