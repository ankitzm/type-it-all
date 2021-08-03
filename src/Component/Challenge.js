import React from 'react'
import "./Challenge.css"
import TestContainer from './TestContainer'

function Challenge() {
    return (
        <div className=" bg-green-300 flex flex-col justify-center items-center" >
            <div className="text-2xl mx-auto my-16">
                Take a speed test now !!
            </div>
            <div className="challenge bg-gray-50 mb-16">
                <TestContainer words={3} characters={20} wpm={23} />
            </div>
        </div>
    )
}

export default Challenge
