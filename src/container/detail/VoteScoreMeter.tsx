import React from 'react'

const VoteScoreMeter = () => {
    
  return (
    // <div className="w-[50px] h-[50px] rounded-full bg-red-400"></div>
    <div className=' relative w-[50px] h-[50px] border-solid border-[5px] border-[#f0f0f0] box-border rounded-full'>
        <span className=' absolute top-0 left-0 block w-full h-full text-center leading-[40px] text-white'>8.8</span>
        <svg className=' absolute left-[-5px] right-[-5px]'>
            <circle cx={100} cy={100} r={90} />
        </svg>
    </div>
  )
}

export default VoteScoreMeter