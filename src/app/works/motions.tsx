"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import WorkSlider from '@/components/sliders/WorkSlider';

import localFont from 'next/font/local'

const bfo = localFont({
    src: "../../../public/fonts/BagelFatOne-Regular.ttf",
  display: 'swap',
  variable: '--font-bfo'
})

export default function WorkMotion() {
    return (
        <div className="container mx-auto">
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <motion.div
                    variants={fadeIn('right', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 2, ease: 'easeInOut' }}
                >
                    <h2 className={`${bfo.className} text-xl lg:text-3xl`}>My Works<span className="text-green-700 dark:text-accent font-extrabold">.</span></h2>
                    <p className="text-xs lg:text-sm xl:text-base">Over the years I have offered services and solutions I am proud to show case here, Please find them categorized by the type of services I am proficient in.</p>
                </motion.div>


                <motion.div
                    variants={fadeIn('left', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="w-full col-span-2">

                    {/* slider */}
                    <WorkSlider />
                </motion.div>

            </div>
        </div>
    )
}
