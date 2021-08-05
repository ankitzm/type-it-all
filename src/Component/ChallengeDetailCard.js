import React from 'react'

function ChallengeDetailCard( {cardName, cardValue} ) {
    return (
        <div className="flex flex-col justify-center items-center py-4 m-auto border hover:shadow-lg">
            <div className="font-semibold">{cardName}</div>
            <div className="font-bold text-4xl">{cardValue}</div>
        </div>
    )
}

export default ChallengeDetailCard
