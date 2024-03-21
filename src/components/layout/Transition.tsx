"use client"

import React from 'react'
import { motion } from "framer-motion";

const transitionVariants = {
    initial: {
        x: '100%',
        width: '100%'
    },
    animate: {
        x: "0%",
        width: "0%",
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%']
    }
}

export default function Transition() {
    return (
        <>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-light dark:bg-secondary bg-blur"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut"
                }}
            >
            </motion.div>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-primary/60 dark:bg-primary/60 bg-blur"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.4,
                    duration: 0.6,
                    ease: "easeInOut"
                }}
            >
            </motion.div>
            <motion.div
                className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-accent/40 dark:bg-accent/40 bg-blur"
                variants={transitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.6,
                    duration: 0.6,
                    ease: "easeInOut"
                }}
            >
            </motion.div>

        </>
    )
}
