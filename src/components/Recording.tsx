import React from 'react'

const Recording = () => {
  return (
    <div className=' flex flex-col bg-[#303030] gap-4 p-4 rounded-[20px]'>
      <div className=' flex gap-4 items-center'>
        <img src="/play.svg" alt="" />
        <div className=' bg-[#606060] w-[200px] h-5 rounded-[20px]'/>
      </div>
      <p className=' font-medium text-sm text-white w-[260px]'>Creating Animated SVGs with Rive without using lottie</p>
    </div>
  )
}

export default Recording