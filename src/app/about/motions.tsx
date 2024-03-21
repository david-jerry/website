"use client"

import React, { useState } from 'react'
import Avatar from '@/components/ui/Avatar';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import { aboutData } from '@/data/about';
import CountUp from "react-countup";
import localFont from 'next/font/local'

const bfo = localFont({
  src: "../../../public/fonts/BagelFatOne-Regular.ttf",
  display: 'swap',
  variable: '--font-bfo'
})


export default function Motions() {
    const [index, setIndex] = useState(0);
    return (
        <>
            <motion.div
                variants={fadeIn('right', 0.6)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{ duration: 2, ease: 'easeInOut' }}
                className='hidden xl:flex absolute bottom-0 -left-[370px] z-0'>
                <Avatar />
            </motion.div>

            <div className="relative gap-x-6 container mx-auto h-full overflow-hidden flex flex-col items-center xl:flex-row">
                <div className={`flex-1 flex flex-col justify-center max-w-sm lg:max-w-[500px] lg:mr-24 lg:pl-14 gap-y-4`}>
                    <motion.h2
                        variants={fadeIn('right', 0.4)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className={`${bfo.className} text-xl lg:text-3xl`}>Good Judgement comes from {' '} <span className="text-primary">Experience, and Experience</span> {' '} comes from bad Judgement.</motion.h2>
                    <motion.p
                        variants={fadeIn('right', 0.6)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className="text-xs lg:text-sm xl:text-base">
                        with over 7 Years experience building fintech, crypto, government and enterprise solutions. I thrive on tackling complex challenges and transforming ideas into intuitive and visually stunning web & mobile applications. <br /><br /><span className="hidden md:flex">My expertise lies in building robust and scalable backends with Python frameworks like Django, flask, fast-api, while simultaneously crafting engaging and interactive user interfaces with React, Flutter and vanilla javascript</span>
                    </motion.p>

                    {/* counters */}
                    <motion.div
                        variants={fadeIn('up', 0.8)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
                        <div className="flex items-center gap-x-4">
                            {/* experience */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-dark/10 dark:after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-green-800 dark:text-accent mb-2">
                                    <CountUp start={0} end={7} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Years of Experience</div>
                            </div>

                            {/* finished projects */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-dark/10 dark:after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-green-800 dark:text-accent mb-2">
                                    <CountUp start={0} end={25} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
                            </div>


                            {/* clients */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-dark/10 dark:after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-green-800 dark:text-accent mb-2">
                                    <CountUp start={0} end={15} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
                            </div>
                        </div>
                    </motion.div>
                </div>



                <motion.div
                    variants={fadeIn('left', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="flex flex-col w-full xl:max-w-[48%] h-[340px] lg:h-[480px] pb-0">
                    <div className="flex gap-x-4 lg:gap-x-8 mx-auto xl:mx-0 mb-4 h-fit">

                        {aboutData.map((item, itemIndex) => {
                            return (
                                <button
                                    type="button"
                                    key={itemIndex}
                                    className={`${index === itemIndex && 'text-primary font-bold after:w-[100%] after:bg-primary after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-4 after:h-[2px] after:bg-secondary dark:after:bg-light after:absolute after:-bottom-1 after:left-0 text-xs lg:text-base`}
                                    onClick={() => setIndex(itemIndex)}
                                >
                                    {item.title}
                                </button>
                            )
                        })}

                    </div>

                    <div className="py-2 pb-14 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start overflow-y-auto scrollbar-thin scrollbar-thumb-primary hover:scrollbar-thumb-primary duration-300 ease-linear h-[100%] lg:h-[100%]">
                        {aboutData[index].info.map((info, i) => {
                            return (
                                <div key={i} className='border-b-2 border-b-dark/20 dark:border-b-light/20 last:border-b-0 flex-1 flex flex-col md:flex-row w-full lg:max-w-max gap-x-2 items-center text-dark/60 dark:text-light/50'>
                                    <span className={`flex text-dark dark:text-light`}>{info.title}</span>
                                    <div className="font-semibold">-</div>
                                    <div className="text-xs lg:text-sm">{info.stage}</div>

                                    <div className="flex gap-4 py-4 max-w-sm lg:max-w-max flex-wrap text-center items-center">
                                        {/* icons */}
                                        {info.icons?.map((icon, iconIndex) => {
                                            return <div title={icon.title} className="text-xl hover:text-primary duration-300 ease-linear" key={iconIndex}>
                                                {icon.icon}
                                            </div>
                                        })}
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </>
    )
}
