"use client"

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ProjectBtn from "@/components/buttons/ProjectBtn";
import Avatar from "@/components/ui/Avatar";
import ParticlesContainer from "@/components/ui/ParticlesContainer";
import { useRouter } from "next/navigation";
import localFont from 'next/font/local'

const bfo = localFont({
  src: "../../public/fonts/BagelFatOne-Regular.ttf",
  display: 'swap',
  variable: '--font-bfo'
})

const cs = localFont({
  src: '../../public/fonts/ClickerScript-Regular.ttf',
  display: 'swap',
  variable: '--font-cs'
})

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="h-screen w-screen bg-light/60 dark:bg-secondary/60">
        <div className="relative z-10 lg:z-0 w-full h-screen bg-gradient-to-r from-white/10 via-light/30 to-light/10 dark:from-secondary/10 dark:via-black/30 dark:to-black/10">
          <div className="text-center flex flex-col lg:justify-center pt-24 xl:pt-40 xl:text-left h-full container mx-auto">
            {/* intro */}
            <motion.h2
              variants={fadeIn('down', 0.1)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={`${cs.className} text-xl text-left text-primary pl-2 font-semibold max-w-sm xl:max-w-xl max-auto`}>
              Jeremiah David
            </motion.h2>

            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={`${bfo.className} whitespace-nowrap mb-6 text-3xl lg:text-4xl font-bold tracking-wider max-w-sm xl:max-w-xl max-auto`}>
              Full-Stack Developer
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-xs lg:text-sm max-w-sm xl:max-w-xl max-auto xl:mx-0 mb-10 xl:mb-16">
              Unlock the potential of your ideas with me today. Let me turn your visions into dynamic software solution. <br /><br /><span className="">My expertise lies in building robust and scalable backends with Python frameworks like Django, flask, fast-api, while simultaneously crafting engaging and interactive user interfaces with React, Flutter and vanilla javascript.</span>
            </motion.p>

            {/* CTA Button */}
            <motion.button onClick={() => router.push("/contact")}
              variants={fadeIn('right', 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="lg:hidden font-bold bg-primary text-dark py-2 px-6 rounded-lg hover:shadow hover:scale-105 duration-300 ease-linear">
              Connect
            </motion.button>

            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden  xl:flex">
              <ProjectBtn />
            </motion.div>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg img */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-screen h-screen absolute mix-blend-color-dodge dark:mix-blend-color-dodge transition-opacity opacity-20 translate-x-2 translate-y-3 translate-z-0">
          </div>

          {/* particles */}
          <ParticlesContainer />

          {/* my avatar */}
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="w-screen lg:w-full lg:h-full lg:max-w-[737px] lg:max-h-[678px] absolute bottom-14 md:bottom-0 right-4 md:right-[8%]">
            <Avatar />
          </motion.div>
        </div>
      </div>
    </>
  );
}
