import React from 'react'

function TestLetter({ individualLetterInfo }) {
    
    const {status} = individualLetterInfo // const status = individualLetterInfo.status

    const statusClass = {
        correct: "bg-green-400",
        incorrect: "bg-red-400",
        notAttempted: "bg-transparent"
    }[status]

    return (
        <span className={`${statusClass}`}>{individualLetterInfo.testLetter}</span>
    )
}

export default TestLetter