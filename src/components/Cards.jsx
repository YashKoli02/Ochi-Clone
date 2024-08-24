import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex gap-5 items-center px-32'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='none'/>
               <button className='absolute left-10 bottom-10 px-5 py-1 border-2 border-yellow-200 rounded-full text-yellow-200'>©2019-2022</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className='card relative rounded-xl w-1/2 h-full bg-[#004d00] flex items-center justify-center'>
        <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='none'/>
               <button className='absolute left-10 bottom-10 px-5 py-1 border-2 border-yellow-200 rounded-full text-yellow-200'>©2019-2022</button>
</div>
<div className='card relative rounded-xl w-1/2 h-full bg-[#004d00] flex items-center justify-center'>
<img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='none'/>
               <button className='absolute left-10 bottom-10 px-5 py-1 border-2 border-yellow-200 rounded-full text-yellow-200'>©2019-2022</button>
</div>
        </div>
    </div>
  )
}

export default Cards