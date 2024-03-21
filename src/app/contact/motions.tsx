"use client"

/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../../variants';
import ContactForm from './form';
import Avatar from '@/components/ui/Avatar';
import localFont from 'next/font/local'

const bfo = localFont({
    src: "../../../public/fonts/BagelFatOne-Regular.ttf",
    display: 'swap',
  variable: '--font-bfo'
})

export default function ContactMotion() {
    return (
        <div className="container mx-auto">
            <div className='flex flex-col xl:flex-row gap-x-8'>
                <motion.div
                    variants={fadeIn('right', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 2, ease: 'easeInOut' }}

                >
                    <h2 className={`${bfo.className} text-xl lg:text-3xl`}>Let's Collaborate<span className="text-green-700 dark:text-accent font-extrabold">.</span></h2>
                    <p className="text-xs lg:text-sm xl:text-base">I am always looking for new challenges and opportunities to put my skills to work. If you’re interested in collaborating or learning more about my services, please don’t hesitate to reach out. Let’s create something remarkable together.</p>
                </motion.div>


                <motion.div
                    variants={fadeIn('down', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className='hidden xl:flex absolute -bottom-[20%] left-[20px] z-0'>
                    <Avatar />
                </motion.div>


                <motion.div
                    variants={fadeIn('up', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="w-full xl:max-w-[65%] pt-8">

                    {/* slider */}
                    <ContactForm />
                </motion.div>

            </div>
        </div>
    )
}
