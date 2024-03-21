import Image from 'next/image'
import React from 'react'

export default function TopLeftImg() {
    return (
        <div className='absolute left-0 top-0 mix-blend-color-dodge dark:mix-blend-color-dodge z-10 w-[200px] lg:w-[400px] opacity-60 dark:opacity-40'>
            <Image src={`/top-left-img.png`} height={400} width={400} alt="" />
        </div>
    )
}
