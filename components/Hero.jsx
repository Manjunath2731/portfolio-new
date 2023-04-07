import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

function Hero() {
    const [text, count] = useTypewriter({
        words: ["Stay-focused",
            "Code-more",
            "<TypeError/>"
        ],
        loop: true,
        delaySpeed: 2000,

    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src='https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=' alt='' />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pd-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-5xl lg:6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#f7ab0a' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                    <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero