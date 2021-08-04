import React from 'react'
import TryAgain from './TryAgain'
import TypingChallengeContainer from './TypingChallengeContainer'

function TestContainer({
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

        <div className="flex flex-col h-full justify-center items-center">
            {/* terenary operator for conditional rendering */}
            {
                timeRemaining > 0 ? (

                    <TypingChallengeContainer
                        selectedParagraph={selectedParagraph}
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                        testInfo={testInfo}
                        inputHandler={inputHandler}
                    />
                ) :
                    (
                        <TryAgain
                            words={words}
                            characters={characters}
                            wpm={wpm}
                            startAgain={startAgain}
                        />
                    )
            }

        </div>
    )
}

export default TestContainer
