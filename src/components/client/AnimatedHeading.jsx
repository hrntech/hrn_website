"use client"
import { headingWrapper } from '@/cssWrapper';
import React, { useEffect, useState } from 'react'
import styles from './Animation.module.css';
function AnimatedHeading({text , delay=0}) {
const letters = text.split('')
const [animatedLetters , setAnimatedLetters] = useState([]) 
useEffect(()=>{

    const timeOutIds = []

    letters.forEach((element, elementIndex) => {
        let timeOutId = setTimeout(()=>(setAnimatedLetters(prev=>[...prev, {element,elementIndex}])),300+elementIndex*100+delay)
        timeOutIds.push(timeOutId)

    return ()=>{
        timeOutIds.forEach((id=>clearTimeout(id)))
    }
});
},[text])
console.log(letters);
  return (
    <>
      {animatedLetters.map((letter, letterIndex)=>(
        <span className={`${styles.letter}`} key={letter.elementIndex} >{letter.element===' '? '\u00A0': letter.element}</span>
      ))}
    </>
  )
}

export default AnimatedHeading