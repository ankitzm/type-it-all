import React from 'react'
import ChallengeDetailCard from './ChallengeDetailCard'
import TypingChallenge from './TypingChallenge';

function TypingChallengeContainer({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
}) {
    return (
        <div className="flex flex-col flex-grow">
            <div className="flex flex-row justify-evenly">
                <p className="w-1/3"><ChallengeDetailCard cardName="WORDS" cardValue={words} /></p>
                <p className="w-1/3"><ChallengeDetailCard cardName="CHARACTERS" cardValue={characters} /></p>
                <p className="w-1/3"><ChallengeDetailCard cardName="WPM" cardValue={wpm} /></p>
            </div>

            <TypingChallenge
                selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted} />
        </div>
    )
}

export default TypingChallengeContainer;
