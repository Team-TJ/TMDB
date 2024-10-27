'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';


interface LazyImageProps {
  width?: string | number;
  height?: string | number;
  src: string;
  containerClass?: string;
  ImageClass?: string;
  alt?: string;
  priority?: boolean;
}


const LazyImage: React.FC<LazyImageProps> = ({ width, height, src, containerClass, ImageClass, alt, priority }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);


  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setImgSrc('/no-image.jpg');
  };

  return (
    <div style={{ width: width, height: height }} className={cn("relative", containerClass)}>
      {loading ?
        <div className={cn('absolute top-0 loading-container', containerClass?.split(' ').filter((cn) => cn.includes('pb-'))[0])}>
          <div className='loading-spinner animate-loading-spin'></div>
        </div>
        : null}
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={imgSrc}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(ImageClass)}
        alt={alt || "lazy image"}
        priority={priority || false}
      />
    </div>
  )
}

export default LazyImage