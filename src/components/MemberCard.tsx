import React from 'react'

const MemberCard = () => {
  return (
    <div className=' relative '>
      <img src="/member.png" alt="" className='w-full ' />
      {/* <img src="/mute.svg" alt="" className=' absolute top-4 right-4 w-[30px]' /> */}
      <img src="/unmute.svg" alt="" className=' absolute top-4 right-4 w-[30px]' />
      <p className=' absolute bottom-4 left-4 w-[30px] text-white font-medium text-2xl'>Jane</p>
    </div>
  )
}

export default MemberCard