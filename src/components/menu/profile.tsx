'use client';

import { useEffect, useRef, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { LinkEst } from '../basic/link';

export const Profile = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e:any) => {
      if(divRef.current && !divRef.current.contains(e.target))
        setIsOpen(false);
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className='flex h-16 w-full flex-row-reverse'>
      <div ref={divRef}>
        <CgProfile 
          size={40} 
          className='m-4 cursor-pointer'
          onClick={()=> setIsOpen(!isOpen)}
        />
      </div>
      {
        isOpen &&
        <nav 
          className='absolute z-10 mr-4 mt-[60px] origin-top-right rounded border border-gray py-2'
          role='navigation'
          aria-label='Profile menu'
        >
          <div role='menu' aria-orientation='vertical' className='menu-dropdown'>
            <div role='menuitem' className='flex flex-col text-base text-gray'>
              <LinkEst href='#' className='mb-2 px-2'>Meu perfil</LinkEst>
            </div>
            <div role='menuitem' className='flex flex-col text-base text-gray'>
              <LinkEst href='#' className='px-2'>Sair</LinkEst>
            </div>
          </div>
        </nav>
      }
    </div>
  );
};