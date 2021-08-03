import React from 'react'
import Flash from "./../Assets/flash.png"
import Typewriter from 'typewriter-effect';

function Landing() {
    return (
        <div className="h-screen flex sm:flex-row flex-col justify-center items-center sm:justify-around bg-red-300">
            <div className="text-4xl" data-aos="fade-right">
                Can you type it
                <Typewriter
                    options={{
                        strings: ['Faster', 'Quick', 'Correctly'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div data-aos="fade-left">

                <img src={Flash} alt="flash" className="md:w-96 w-72 mt-12" />
            </div>
        </div>
    )
}

export default Landing
