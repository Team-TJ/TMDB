import React, { MouseEventHandler } from 'react';
import Image from 'next/image';
import getImagePath from '@/utils/getImagePath';
import { cn } from '@/lib/utils';

const ActorCard = ({
  actor,
  className,
  onClick = () => { }
}: {
  actor: any;
  className?: string;
  onClick: MouseEventHandler;
}) => {
  return (
    <li onClick={onClick} className={cn('flex-shrink-0 group cursor-pointer', className)}>
      <figure className=" border-[#EEEEEE] border-solid border-[5px]">
        <div className="w-[160px] h-[240px] relative overflow-hidden">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={getImagePath(actor.profile_path) || '/film1.jpg'}
            className="object-cover group-hover:scale-110 transition-all duration-500"
            alt="배우 사진"
          />
        </div>
        <figcaption className="bg-deepblue text-[14px] px-2 w-[160px] h-[60px] p-[10px] group-hover:bg-[#03b3e4] transition-all duration-500">
          <span className="block text-[#8ccda2] font-semibold truncate group-hover:text-[#EEEEEE] transition-all duration-500">
            {actor.name}
          </span>
          {actor.character
            ?
            <span className="block text-[#EEEEEE] truncate">
              {`'${actor.character}' 역`}
            </span>
            :
            <span className='block text-[#999] truncate'>
              배역 정보 없음
            </span>
          }
        </figcaption>
      </figure>
    </li>
  );
};

export default ActorCard;
