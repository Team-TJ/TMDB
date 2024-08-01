import { cn } from '@/lib/utils';
import React from 'react';

interface ScoreMeterProps {
  score : number
  className? : string
}

const VoteScoreMeter : React.FC<ScoreMeterProps> = ({score, className}) => {

  const getGradeColor = (score : number) => {
    if (0 <= score && score <= 2.5) {
      return '#FF0000';
    } else if (2.5 < score && score <= 5.0) {
      return '#FF4500'
    } else if (5.0 < score && score <= 7.5) {
      return '#ffA500'
    } else if (7.5 < score && score <= 10) {
      return '#9ACD32'; 
    } else {
      return '#000000';
    }
  }
  

  return (
    <div className='relative'>
      <svg viewBox='0 0 100 100' width={52} height={52} className='rounded-full border-solid border-[#ffffff38] border-[1px]'>
        <circle cx={50} cy={50} r={40} strokeWidth={10} stroke='#FFFFFF' opacity={0.2}></circle>
        <circle 
          className='origin-center rotate-[-90deg]' 
          pathLength={10} cx={50} cy={50} r={40} 
          strokeWidth={10} fill='none' stroke={getGradeColor(score)}
          strokeDashoffset={10 - score} 
          strokeDasharray={10}>
        </circle>
      </svg>
        <span className={`absolute abs-center text-[14px] font-semibold text-[${getGradeColor(score)}]`}>
          {score}
        </span>
    </div>
  )
}

export default VoteScoreMeter