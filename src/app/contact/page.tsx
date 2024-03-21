/* eslint-disable react/no-unescaped-entities */

import Circles from '@/components/ui/Circles';
import Bulb from '@/components/ui/Bulb';
import React from 'react'

import { Metadata } from 'next';
import ContactMotion from './motions';

export const metadata: Metadata = {
  title: "Let's Connect",
  description: "Full-stack dev: Python/Django backends, React/Flutter UIs. Builds fintech, crypto, & enterprise apps.",
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

export default function Contact() {
  return (
    <div className='h-full w-full bg-light/10 dark:bg-dark/10 py-36 flex items-center'>

      <Circles />
      <ContactMotion />
      <Bulb />

    </div>
  )
}
