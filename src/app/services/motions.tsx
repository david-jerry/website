"use client"

import React from 'react'
import ServiceSlider from '@/components/sliders/ServiceSlider';
import { fadeIn } from '../../../variants';
import { motion } from 'framer-motion';
import localFont from 'next/font/local'

const bfo = localFont({
    src: "../../../public/fonts/BagelFatOne-Regular.ttf",
  display: 'swap',
  variable: '--font-bfo'
})

export default function ServiceMotion() {
    return (
        <div className="container mx-auto">
            <div className='flex flex-col xl:flex-row gap-x-8'>
                <div
                    className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                    <motion.h2
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        transition={{ duration: 2, ease: 'easeInOut' }}

                        className={`${bfo.className} text-xl lg:text-3xl xl:mt-8`}>My Services<span className="text-green-700 dark:text-accent font-extrabold">.</span></motion.h2>
                    <motion.p
                        variants={fadeIn('up', 0.2)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        transition={{ duration: 2, ease: 'easeInOut' }}

                        className="text-xs lg:text-sm xl:text-base mb-4">I would love to work for you rendering the following services. So please contact me for any that fits your requirements.</motion.p>
                </div>

                <motion.div
                    variants={fadeIn('down', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="w-full xl:max-w-[65%]">

                    {/* slider */}
                    <ServiceSlider />
                </motion.div>
            </div>
        </div>
    )
}
