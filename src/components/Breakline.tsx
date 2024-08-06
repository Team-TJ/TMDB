import { cn } from '@/lib/utils'
import React from 'react'

const Breakline = ({className} : {className? : string}) => {
  return (
    <div className={cn("bg-[rgba(255,255,255,0.5)] w-full h-[.5px] mt-5", className)}></div>
  )
}

export default Breakline