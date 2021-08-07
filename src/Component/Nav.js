import React from 'react'
import Lightning from "../Assets/lightning.svg"
import ForkMe from './ForkMe/ForkMe'

function Nav() {
  return (
    <nav className="w-full text-5xl bg-gray-800 h-full">
      <ForkMe
        url="https://github.com/ankitzm/type-it-all"
      />
      <p className="font-bangers my-4 inline-block float-left ml-4 text-yellow-300">
        <img src={Lightning} alt="lightning" className="h-14 inline-block" />
        TYPE IT ALL
      </p>
    </nav>
  )
}

export default Nav
