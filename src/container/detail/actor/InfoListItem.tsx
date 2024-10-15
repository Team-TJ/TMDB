import React, { MouseEventHandler } from 'react';
import { cn } from '../../../lib/utils';

const InfoListItem = ({
  title,
  content,
  className,
  onClick
}: {
  title?: string;
  content: string;
  className?: string;
  onClick? : MouseEventHandler
}) => {
  return (
    <li
      className={cn(
        'py-2 flex justify-center gap-3 border-b-[rgba(255,255,255,0.2)] border-b-[.3px] last:border-b-0',
        className
      )}
      onClick={onClick}
    >
      <b className="text-[#999]">{title}</b>
      <span className="text-[#EEE]">{content}</span>
    </li>
  );
};

export default InfoListItem;
