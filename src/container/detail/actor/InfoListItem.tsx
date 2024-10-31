import React, { MouseEventHandler } from 'react';
import { cn } from '../../../lib/utils';

const InfoListItem = ({
  title,
  content,
  className,
  onClick,
}: {
  title?: string;
  content?: string | null;
  className?: string;
  onClick?: MouseEventHandler;
}) => {
  return (
    <li
      className={cn(
        'py-2 flex justify-center gap-1 border-b-[rgba(255,255,255,0.2)] border-b-[.3px] last:border-b-0 text-[12px] md:text-[14px] ',
        className
      )}
      onClick={onClick}
    >
      {content
        ?
        <><b className="text-[#999] truncate pr-1">{title}</b>
          <span className={cn("text-[#EEE] pr-2", title && 'truncate')}>{content}</span></>
        :
        <span className={cn('text-[#888] truncate')}>{title} 정보가 없습니다.</span>
      }
    </li>
  );
};

export default InfoListItem;
