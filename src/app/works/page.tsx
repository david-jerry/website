import Circles from '@/components/ui/Circles';
import Bulb from '@/components/ui/Bulb';
import React from 'react'

import { Metadata } from 'next';
import WorkMotion from './motions';

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Generally everything I have done over the short span working as a Full-stack Developer.",
  keywords: [
    "Full-stack developer",
    "Python",
    "Django",
    "React",
    "Flutter",
    "Fintech",
    "Cryptocurrency",
    "Enterprise applications",
    "Web development",
    "Web applications",
    "User interface (UI)",
    "Backend development",
    "Scalable applications",
    "Complex challenges",
    "Python Django developer for hire",
    "React developer for fintech apps",
    "Build a crypto exchange with Next.js",
    "Enterprise application development services",
  ],
}


export default function Works() {
  return (
    <div className='h-screen w-screen bg-light/10 dark:bg-dark/10 py-36 flex items-center'>

      <Circles />
      <WorkMotion/>
      <Bulb />

    </div>
  )
}
