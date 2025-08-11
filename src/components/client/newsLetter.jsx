"use client";
import React, { useState } from "react";

function NewsLetter() {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
    <form
      onSubmit={handleSubmit}
      className="group flex flex-wrap items-center h-10 w-full relative"
    >
      <input
        className="group-active:h-8 group-hover:h-8 group-focus-within:h-8 focus:outline-none border-b-2 h-0 w-full sm:w-60 px-0.5 transition-all duration-300 ease-in-out dark:text-white placeholder:text-white"
        type="text"
        placeholder="Enter your email"
        name="newsLetter"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
  
      <div className="flex items-center">
        <span className="absolute top-4.5 sm:left-63 sm:top-3 z-0 w-4 h-4 bg-[#dd4242] rounded-full 
          group-hover:top-0 group-hover:w-40 group-hover:h-10
          group-focus-within:top-10 sm:group-focus-within:top-0 group-focus-within:w-40 group-focus-within:h-10 
          group-active:top-10 sm:group-active:top-0 group-active:w-40 group-active:h-10
          transition-all duration-300 ease-in-out "></span>
  
        <button
          type="submit"
          className=" mt-2.5 sm:mt-0 relative z-10 w-auto h-full sm:pl-8 pl-6 text-black text-[1.5rem] bg-transparent 
            focus:outline-none group-hover:text-white group-focus-within:text-white dark:text-white"
        >
          Subscribed
        </button>
      </div>
    </form>
  </div>
  
  );
}

export default NewsLetter;
