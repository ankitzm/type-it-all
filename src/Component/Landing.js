import React from 'react'
import Flash from "./../Assets/flash.png"
import Typewriter from 'typewriter-effect';

function Landing() {
    return (
        <div className="h-screen flex sm:flex-row flex-col justify-center items-center sm:justify-around bg-green-300">
            <div className="text-6xl text-left font-bangers" data-aos="fade-right">
                Can you type it
                <Typewriter
                    options={{
                        strings: ['Faster ?', 'Quick ?', 'Correctly ?'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div data-aos="fade-left">

                <img src={Flash} alt="flash" className="md:w-35vw w-80vw mt-12 md:mt-0" />
            </div>
        </div>
    )
}

export default Landing
