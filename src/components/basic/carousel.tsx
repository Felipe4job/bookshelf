'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

interface CarouselProps {
  items: [
    {
      title: string;
      image?: string;
      evolution: number;
    }
  ]
}

export const Carousel = (props: CarouselProps) => {

  const [ active, setActive ] = useState(0);

  return (
    <div id='controls-carousel' className='relative w-full' data-carousel='static'>
      <div className='relative h-56 overflow-hidden rounded-lg'>
        {
          Array.from({ length: props.items.length }, (_, index)=>{

            console.log(index, props.items[index]);
            return (
              <div 
                key={index} 
                className={
                  `${ active !== index ? active !== index - 1 && active !== index + 1 ? 'hidden' : 'scale-75 opacity-25' : ''} duration-700 ease-in-out`
                } 
              >
                {
                  props.items[index].image ?
                    <Image
                      alt={`image-${index}`}
                      src={props.items[index].image || ''}
                      height={224}
                      width={160} 
                    />
                    :
                    <div className='h-56 w-40'>
                      {props.items[index].title}
                    </div>
                }
              </div>
            );
          })
        }
      </div>
      {/* Controles */}
      <button 
        type='button' 
        className={`${active === 0 ? 'hidden' : ''} group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none`}
        onClick={ () => setActive(active - 1) }
      >
        <span className='inline-flex size-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white'>
          <BsFillArrowLeftCircleFill
            className='rtl:rotate-180'
            size={16}
          />  
        </span>
      </button>
      <button 
        type='button' 
        className={`${active === props.items.length - 1 ? 'hidden' : ''} group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none`}
        onClick={ () => setActive(active - 1) }
      >
        <span className='inline-flex size-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white'>
          <BsFillArrowRightCircleFill
            className='rtl:rotate-180'
            size={16}
          />  
        </span>
      </button>
    </div>
  );
};