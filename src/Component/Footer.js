import React from 'react'
import Linkedin from '../Assets/icons/linkedin.png'
import Github from '../Assets/icons/github.png'
import Ankit from '../Assets/ankit.jpeg'


function Footer() {
    return (
        <div className="text-white text-lg p-8 bg-gray-800" height="100">
            <img className="w-36 h-36 rounded-full mx-auto border-white" src={Ankit} alt="" width="384" height="512" />

            <div className="text-cyan-600 mt-4">
                Ankit Singh
            </div>
            <div className="text-gray-500">
                Frontend Web Developer
            </div>

            <div className="flex justify-center mt-3 items-end">
                <a href="https://www.linkedin.com/in/ankitzm/"><img src={Linkedin} alt="" width="40" className="mx-2" /></a>
                <a href="https://www.github.com/ankitzm/"><img src={Github} alt="" width="40" className="mx-2" /></a>

            </div>

        </div>
    )
}

export default Footer