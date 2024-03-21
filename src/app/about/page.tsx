import Circles from '@/components/ui/Circles';
import React from 'react'
import Motions from './motions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Qualifications / Experiences",
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

export default function About() {

  return (
    <div className="h-screen w-screen bg-light/10 dark:bg-dark/10 py-32 text-center xl:text-left">
      <Circles />

    <Motions/>
    </div >
  )
}
