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
}) {

    return (

        <div className="flex flex-col h-full">
            {/* terenary operator for conditional rendering */}
            {
                timeRemaining > 0 ? (

                    <TypingChallengeContainer
                        selectedParagraph={selectedParagraph}
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted} />
                ) :
                    (
                        <TryAgain words={words} characters={characters} wpm={wpm} />
                    )
            }

        </div>
    )
}

export default TestContainer
