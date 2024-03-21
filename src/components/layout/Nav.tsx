"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiNewspaper,
    HiEnvelope,
} from 'react-icons/hi2';

export const navData = [
    {
        icon: <HiHome />,
        path: "/",
        title: "Home"
    },
    {
        icon: <HiUser />,
        path: "/about",
        title: "About"
    },
    {
        icon: <HiRectangleGroup />,
        path: "/services",
        title: "Services"
    },
    {
        icon: <HiViewColumns />,
        path: "/works",
        title: "Works"
    },
    // {
    //     icon: <HiNewspaper />,
    //     path: "/reads",
    //     title: "Reads"
    // },
    {
        icon: <HiEnvelope />,
        path: "/contact",
        title: "Contact"
    },
]

export default function Nav() {
    const pathname = usePathname()

    return (
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
            <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-dark/10 dark:bg-light/10 bg-blur text-3xl xl:text-xl xl:rounded-full">
                {navData.map((link, index) => {
                    return (
                        <Link
                            title={link.title}
                            className={`${pathname === link.path && 'text-primary'} hover:text-primary duration-300 ease-linear relative flex items-center group transition-all`}
                            key={index}
                            href={link.path}>
                            {/* tooltip */}
                            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                                <div className="bg-secondary text-light dark:bg-light relative flex dark:text-dark items-center p-3 rounded-md">
                                    <div className="text-xs leading-none font-semibold capitalize">
                                        {link.title}
                                    </div>

                                    {/* caret */}
                                    <div className="border-solid border-l-secondary dark:border-l-light border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-[5px]"></div>
                                </div>
                            </div>
                            {/* tooltip end */}

                            {/* icon */}
                            <span className="block">
                                {link.icon}
                            </span>
                            {/* icon end */}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
