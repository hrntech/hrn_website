"use client"
import React, { useState } from 'react'

function NewsLetter() {
    const [value,setValue] = useState("");
    const handleSubmit  = (e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="group flex flex-wrap items-center h-10 w-full relative">
  {/* The input starts with a width of 0 and becomes visible on hover */}
  <input
    className=" group-hover:h-8 focus:outline-none  border-b-2 h-0  w-60 px-0.5 transition-all duration-300 ease-in-out"
    type="text"
    placeholder="Enter your email"
    name="newsLetter"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />

  {/* The span acts as a small dot and expands to be a background on hover */}
  {/* It should be a sibling of the button and absolute positioned */}
  <span className="absolute left-63 top-3 z-0 w-4 h-4 bg-[#dd4242] rounded-full group-hover:top-1 group-hover:w-40 group-hover:h-8 transition-all duration-300 ease-in-out"></span>

  {/* The button is positioned over the expanding span and has a higher z-index */}
  <button
    type="submit"
    className="relative z-10 w-auto h-full pl-8  text-black text-[1.5rem] bg-transparent focus:outline-none"
  >
    Subscribed
  </button>
</form>
    </div>
  )
}

export default NewsLetter
