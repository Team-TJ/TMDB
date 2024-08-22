'use client'
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface ScoreMeterProps {
  score : number
  className? : string
}

const VoteScoreMeter : React.FC<ScoreMeterProps> = ({score, className}) => {
  let [gauge, setGauge] = useState<number>(10);
  let [showScore, setShowScore] = useState<number>(0)

  useEffect(() => {
    setGauge(10-score)
    setShowScore(1)
  },[score])

  let gradeColor = '#FFFFFF';
  const gradeColors = ['#FF0000', '#FF4500', '#ffA500', '#9ACD32'];
  try {
    let level = (Math.ceil(score/2.5) || 1) - 1
    gradeColor = gradeColors[level]
  } catch {
    console.error('Error : Unexpected Range : Score must be number between 0~10');
  }
  return (
    <div className={cn('relative', className)}>
      <svg viewBox='0 0 100 100' width={52} height={52} className='rounded-full border-solid border-[#ffffff38] border-[1px]'>
        <circle cx={50} cy={50} r={40} strokeWidth={10} stroke='#FFFFFF' opacity={0.2}></circle>
        <circle 
          className='origin-center rotate-[-90deg] transition-all duration-1000' 
          pathLength={10} cx={50} cy={50} r={40} 
          strokeWidth={10} fill='none' stroke={gradeColor}
          strokeDashoffset={gauge} 
          strokeDasharray={10}>
        </circle>
      </svg>
        <span className='absolute abs-center text-[14px] font-semibold transition-opacity duration-1000' style={{color : gradeColor, opacity : showScore}}>
          {(score === 10 || score === 0) ? score : score.toFixed(1)}
        </span>
    </div>
  )
}

export default VoteScoreMeter