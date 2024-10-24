import React from 'react';
import { IoMdPeople } from "react-icons/io";
import Breakline from '@/components/Breakline';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon, text, className }) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {icon}
      <h3 className='text-white text-[20px] text-bold'>{text}</h3>
      <Breakline className='flex-1 m-0 opacity-70' />
    </div>
  )
}

export default SectionTitle