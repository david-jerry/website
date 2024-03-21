/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'

export default function Avatar() {
  return (
    <>
      <div className="max-w-none">
        <img src={`/me.png`} alt="Jeremiah David" className='grayscale translate-z-0 w-3/4 mx-auto lg:mx-0 lg:w-full lg:h-full' />
      </div>
    </>
  )
}
