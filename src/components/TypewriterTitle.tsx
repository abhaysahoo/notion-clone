"use client";
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
        options={{
            loop: true,
            autoStart: true,

        }}
        onInit={(typewriter) => {
            typewriter
                .typeString(`{'\u{1F680}'} Supercharged Productivity.`)
                .pauseFor(1000)
                .deleteAll()
                .typeString(`{'\u{1F916}'} AI-Powered Insights.`)
                .pauseFor(1000)
                .start()

        }}
    ></Typewriter>
  )
}

export default TypewriterTitle