import React from 'react'
import { motion } from 'framer-motion'

function ExperienceCard() {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
         w-[400px] md:w-[300px] xl:w-[400px] snap-center
         bg-gradient-to-r from-gray-700 via-gray-900 to-black p-10 hover:opacity-100 opacity-40
         cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                className='w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
                src='https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc=' alt=''
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Fractal</h4>
                <p className='font-bold text-2xl mt-1'>Softwere Developer</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech used */}
                    <img
                        className='h-10 w-10 rounded-full'
                        src='https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc='
                        alt=''
                    />
                    <img
                        className='h-10 w-10 rounded-full'
                        src='https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc='
                        alt=''
                    />
                    <img
                        className='h-10 w-10 rounded-full'
                        src='https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc='
                        alt=''
                    />
                </div>
                <p className='uppercase py-5 text-gray-300'>started work ..... ended work ......</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>summery point</li>
                    <li>summery point</li>
                    <li>summery point</li>
                    <li>summery point</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard
