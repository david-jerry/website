"use client"

import React from 'react'
import {RiLinkedinBoxFill, RiGithubFill, RiInstagramFill} from "react-icons/ri"
import Link from "next/link";


export default function Socials() {
  return (
    <div className="flex items-center gap-3 text-lg lg:text-xl">
      <Link className="group hover:text-primary font-bold duration-300 ease-linear" href="https://linkedin.com/in/jeremiahedavid" target="blank" ><RiLinkedinBoxFill title="Linkedin" className="group-hover:scale-105 duration-300 ease-linear" /></Link>
      <Link className="group hover:text-primary font-bold duration-300 ease-linear" href="https://github.com/david-jerry" target="blank" ><RiGithubFill title="Github" className="group-hover:scale-105 duration-300 ease-linear" /></Link>
      <Link className="group hover:text-primary font-bold duration-300 ease-linear" href="https://www.instagram.com/mst_daveed/" target="blank" ><RiInstagramFill title="Instagram" className="group-hover:scale-105 duration-300 ease-linear" /></Link>
    </div>
  )
}
