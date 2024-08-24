import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-40 px-20'>
       <div className='masker '>
        <h1 className='uppercase text-9xl leading-[7vw] tracking-tighter font-medium'>We Create</h1>
       </div>
       <div className='masker '>
        <div className="w-fit flex">
       <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1]}} className='w-[9vw] h-[6vw] relative -top-[-1vw] bg-red-600'></motion.div>
        <h1 className='uppercase text-9xl leading-[7vw] tracking-tighter font-medium'>Eye Opening</h1>
       </div>
       </div>
       <div className='masker '>
        <h1 className='uppercase text-9xl leading-[7vw] tracking-tighter font-medium'>Presentations</h1>
       </div>
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
          <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className="start flex items-center gap-5">
          <div className='px-4 py-2 bottom-[2px] border-zinc-400 rounded-full font-light text-md capitalize '>start the project</div>
          <div className='w-3 h-3 rounded-full bottom-[2px] border-zinc-400 flex items-center justify-center'>
            <span className='rotate-[45deg]'>
            <FaArrowUpLong />
            </span>
         
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage