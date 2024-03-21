/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Header from './Header'
import TopLeftImg from '../ui/TopLeftImg'
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import Transition from './Transition';


export default function Layout({ children }: { children: React.ReactNode }) {
    const pname = usePathname();
    return (
        <AnimatePresence key={pname} mode="wait">
            <motion.div className='h-screen'>
                <Transition />
                <div className={`w-screen h-screen overflow-hidden bg-light-bg dark:bg-site bg-no-repeat bg-blend-difference relative`}>
                    <TopLeftImg />
                    <Nav />
                    <Header />

                    {children}
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
