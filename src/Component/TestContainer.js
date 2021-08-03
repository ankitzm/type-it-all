import React from 'react'
import TryAgain from './TryAgain'
import TypingChallengeContainer from './TypingChallengeContainer'

function TestContainer({ words, characters, wpm }) {

    const timeRemaining = 50;

    return (

        <div className="flex flex-col h-full">
            {/* terenary operator for conditional rendering */}
            {
                timeRemaining > 0 ? (
                    <TypingChallengeContainer words={words} characters={characters} wpm={wpm} />
                ) :
                    (
                        <TryAgain words={words} characters={characters} wpm={wpm} />
                    )
            }

        </div>
    )
}

export default TestContainer
