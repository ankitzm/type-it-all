import React from 'react'

function ChallengeDetailCard( {cardName, cardValue} ) {
    return (
        <div className="flex flex-col justify-center items-center py-6 m-0 border-4">
            <div className="font-bold">{cardName}</div>
            <div className="font-semibold">{cardValue}</div>
        </div>
    )
}

export default ChallengeDetailCard
