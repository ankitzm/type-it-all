import React from 'react'
import "./TypingChallenge.css"

function TypingChallenge() {
    return (
        <div className="border-8">
            <div className="text-2xl">
                <div>00:60</div>
                <div>Start typing to start the test</div>
            </div>
            <div className="flex flex-row justify-center border-4">
                <div className="text-area">
                    hello
                </div>
                <textarea className="text-area resize-none"></textarea>

            </div>
        </div>
    )
}

export default TypingChallenge
