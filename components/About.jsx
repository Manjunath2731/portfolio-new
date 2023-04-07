import React from 'react'
import { motion } from 'framer-motion'

function About() {
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='flex flex-col relative h-screen text-center md:text-left
                    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
                    >
                <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
                </h3>
                <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src='https://media.istockphoto.com/id/1344688156/photo/portrait-of-a-man-using-a-computer-in-a-modern-office.jpg?b=1&s=170667a&w=0&k=20&c=AAVVOvN9uY1Rd_0QsWb8WvBN-4VSUdCORiZx51s5OLc='
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-contain md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
                />
                <div className='space-y-10 px-0 md:px-10'>
                    <h4 className='text-4xl font-semibold'>
                        Here is a
                        <span className='underline decoration-[#f7ab0a]/50'>
                            little
                        </span> introduction
                    </h4>
                <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis beatae atque molestiae maxime exercitationem voluptatem amet dolorum, ad tenetur quo nisi ab eveniet ratione blanditiis nulla dolores, obcaecati officia? Quibusdam.
                Deserunt voluptates delectus voluptatem. Dolorem impedit saepe autem officiis dolores iure, nobis quia commodi architecto veritatis dicta laudantium ad, adipisci veniam quam, velit nemo quidem labore illo exercitationem. Itaque, tempora!
                Inventore voluptatibus, quia consectetur ea suscipit dicta, nesciunt ducimus fugiat molestiae, hic dolorem blanditiis recusandae! Id, quae sint voluptatum sed inventore voluptas alias esse sequi atque? Mollitia fugiat ex error.</p>
            </div>
        </motion.div>
    )
}

export default About