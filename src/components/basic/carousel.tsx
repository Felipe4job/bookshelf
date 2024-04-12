'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

export interface CarouselProps {
  items: {
    title: string;
    image?: string;
    evolution: number;
  }[]
}

export const Carousel = (props: CarouselProps) => {

  const [ active, setActive ] = useState(0);

  return (
    <div id='controls-carousel' className='relative mb-4 w-full' data-carousel='static'>
      <div className='relative flex h-64 content-center justify-center overflow-hidden'>
        {
          Array.from({ length: props.items.length }, (_, index)=>{
            
            return (
              <div 
                key={index} 
                className={
                  `
                    ${ active !== index ? active !== index - 1 && active !== index + 1 ? 'hidden' : 'scale-75 opacity-25' : 'z-10'} 
                    transition duration-1000
                    ${ active === index - 1 ? '-ml-10' : active === index + 1 ? '-mr-10' : '' }
                  `
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
        id='previous' 
        className={`${active === 0 ? 'hidden' : ''} group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center focus:outline-none`}
        onClick={ () => setActive(active - 1) }
      >
        <span className='inline-flex size-10 items-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white'>
          <BsFillArrowLeftCircleFill            
            size={22}
          />  
        </span>
      </button>
      <button 
        type='button'
        id='next'
        className={`${active === props.items.length - 1 ? 'hidden' : ''} group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center focus:outline-none`}
        onClick={ () => setActive(active + 1) }
      >
        <span className='inline-flex size-10 items-center justify-end rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white'>
          <BsFillArrowRightCircleFill
            size={22}
          />  
        </span>
      </button>
    </div>
  );
};