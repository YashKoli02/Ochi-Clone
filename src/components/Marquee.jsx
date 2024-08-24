import { motion } from 'framer-motion'
import React from 'react'
motion
const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full h-[50vh] bg-[#004d43] flex items-center rounded-tl-3xl rounded-tr-3xl'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden">
       <motion.h1 initial={{x:"0"}}
       animate={{x:"-100%"}}
       transition={{repeat:Infinity,ease:"linear",duration:10}}  className='text-[10vw] leading-none uppercase font-semibold pr-20'>we are ochi</motion.h1>
       <motion.h1 initial={{x:"0"}}
       animate={{x:"-100%"}}
       transition={{repeat:Infinity,ease:"linear",duration:10}}  className='text-[10vw] leading-none uppercase font-semibold pr-20'>we are ochi</motion.h1>
     <motion.h1 initial={{x:"0"}}
       animate={{x:"-100%"}}
       transition={{repeat:Infinity,ease:"linear",duration:10}}  className='text-[10vw] leading-none uppercase font-semibold pr-20'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee