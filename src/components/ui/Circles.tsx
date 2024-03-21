"use client";

import Image from 'next/image'
import React from 'react'

export default function Circles() {
    return (
        <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-soft-light dark:mix-blend-color-dodge animate-pulse duration-75 z-10">
            <Image src={'/circles.png'} width={260} height={200} alt="T" className="w-full h-full" />
        </div>
    )
}
