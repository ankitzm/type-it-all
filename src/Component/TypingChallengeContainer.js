import React from 'react'
import ChallengeDetailCard from './ChallengeDetailCard'
import TypingChallenge from './TypingChallenge/TypingChallenge';

function TypingChallengeContainer({
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
        <div className="flex flex-col flex-grow">
            <div className="flex flex-row justify-evenly h-auto">
                <div className="w-1/3"><ChallengeDetailCard cardName="WORDS" cardValue={words} /></div>
                <div className="w-1/3"><ChallengeDetailCard cardName="CHARACTERS" cardValue={characters} /></div>
                <div className="w-1/3"><ChallengeDetailCard cardName="WPM" cardValue={wpm} /></div>
            </div>

            <TypingChallenge
                selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                testInfo={testInfo}
                inputHandler={inputHandler}
            />
        </div>
    )
}

export default TypingChallengeContainer;
