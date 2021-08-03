import React from 'react'
import ChallengeDetailCard from './ChallengeDetailCard'
import TypingChallenge from './TypingChallenge';

function TypingChallengeContainer( {words, characters, wpm} ) {
    return (
        <div className="flex flex-col flex-grow">
            <div className="flex flex-row justify-evenly">
                <p className="w-1/3"><ChallengeDetailCard cardName="WORDS" cardValue={words} /></p>
                <p className="w-1/3"><ChallengeDetailCard cardName="CHARACTERS" cardValue={characters} /></p>
                <p className="w-1/3"><ChallengeDetailCard cardName="WPM" cardValue={wpm} /></p>
            </div>    

            <TypingChallenge />       
        </div>
    )
}

export default TypingChallengeContainer;
