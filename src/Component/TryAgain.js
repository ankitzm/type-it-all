import React from 'react'

function TryAgain({ words, characters, wpm, startAgain }) {
    const text = `Check out the React app to find your typing speed here https://ankitzm.github.io/type-it-all/, mine is ${wpm} wpm, what's yours. `;

    return (
        <div className="text-2xl text-justify">
            <div className="text-3xl mb-6 underline font-bold text-center">Here's the Result</div>

            <div className="items-center m-4">
                <p >Words &emsp;&emsp; : {words}</p>
                <p>Characters : {characters}</p>
                <p>Speed &emsp;&emsp; : {wpm} WPM</p>
            </div>

            <div className="text-xl">
                <button
                    onClick={() => startAgain()}
                    className="bg-gray-800 hover:bg-black text-white font-semibold py-2 px-4 mx-2 rounded shadow"
                >
                    Retry
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://www.facebook.com/sharer/sharer.php?u=" +
                            text,
                            "facebook-share-dialog",
                            "width=800,height=600"
                        )
                    }
                    className="bg-blue-800 text-white font-semibold py-2 px-4 mx-2 border border-gray-400 rounded shadow"
                >
                    Share
                </button>
                <button
                    onClick={() =>
                        window.open(
                            "https://twitter.com/intent/tweet?text=" +
                            text + "\n Created by @ankitzm",
                            "Twitter",
                            "width=800,height=600"
                        )
                    }
                    className="bg-blue-600 text-white font-semibold py-2 px-4 mx-2 border border-gray-400 rounded shadow"
                >
                    Tweet
                </button>
            </div>
        </div>
    )
}

export default TryAgain
