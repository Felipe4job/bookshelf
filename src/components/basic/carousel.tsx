'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiSolidCircle } from 'react-icons/bi';

export interface CarouselProps {
  items: {
    title: string;
    image?: string;
    evolution: number;
  }[]
}

export interface CarouselReminderProps {
  items: {
    id: string;
    text: string;
    date: string;
  }[]
}

export const Carousel = (props: CarouselProps) => {

  const [ active, setActive ] = useState(0);

  return (
    <div id='controls-carousel' className='relative w-full'>
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
                      alt={`image-${index + 1}`}
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

export const CarouselReminder = (props: CarouselReminderProps) => {

  const [ active, setActive ] = useState(0);
  const disableReminder = (id:string)=>{
    console.log(id);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (active < props.items.length - 1)
        setActive(active + 1);
      else
        setActive(0);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [ active, props.items.length ]);

  return (
    <div id='controls-carousel' className='relative w-full rounded-lg border border-grayLight bg-primaryLight p-4'>
      <div className='flex h-56 items-center justify-center overflow-hidden'>
        {
          Array.from({ length: props.items.length }, (_, index)=>{
            
            return (
              <div 
                key={index} 
                className={
                  `
                    ${ active !== index ? 'hidden' : ''} 
                    transition duration-1000
                  `
                } 
              >
                <div className='flex flex-col'>
                  <div className='mb-6'>
                    {
                      props.items[index].text
                    }
                  </div>
                  <div className='flex w-full justify-end text-xs'>
                    {
                      `Avisar até: ${props.items[index].date}.`
                    }
                    <span 
                      onClick={()=> disableReminder(props.items[index].id)} 
                      className='ml-2 cursor-pointer text-redLight'
                    > 
                      Desativar lembrete
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
      {/* Controles */}
      <div className='absolute bottom-4 start-0 flex w-full justify-center space-x-2 overflow-hidden'>
        {
          Array.from({ length: props.items.length }, (_, index)=>{
            return (
              <button 
                key={index}
                type='button'
                id={`circle-${index + 1}`}
                onClick={()=>{setActive(index);}}
              >
                <BiSolidCircle size={18} className={`${active === index ? 'scale-105 opacity-75' : 'opacity-50'} text-white`}/>
              </button>
            );
          })
        }
      </div>
    </div>
  );
};