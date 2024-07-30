import { cn } from '@/lib/utils';
import React from 'react'

interface OtherInfoItemProps {
    title : string; // 제목
    titleIcon : React.ReactNode; // 제목 옆 아이콘
    content? : string; // 내용 (데이터)
}

const OtherInfoItem : React.FC<OtherInfoItemProps> = ({title, titleIcon, content}) => {
  return (
    <li className="py-2 flex items-center border-b-[#ffffff34] border-b-[.3px] gap-10">
        <div className="flex items-center gap-2 w-[60px]">
           {titleIcon}
          <span className="text-[#c5cfe0d2] text-[12.6px]">{title}</span>
        </div>
        <div className={cn("text-[#f9f9fa] text-[14px]", content || 'text-[#b9b9bbe1]')}>
            {content || `${title} 정보 없음`}
        </div>
    </li>
  )
}

export default OtherInfoItem