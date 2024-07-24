'use client';

import { useGlobalContext } from '@/contexts/globalProvider';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineNoPhotography, MdOutlinePhotoCamera } from 'react-icons/md';
import Image from 'next/image';

export function Profile () {
  const { myProfile } = useGlobalContext();

  return(
    myProfile &&
    <div className='flex w-full'>
      <div className='flex basis-1/2 justify-center'>
        <div className='relative size-32 overflow-hidden rounded-full'>
          <div className='absolute z-10 size-full bg-white opacity-50' />
          <div className='absolute z-20 flex size-full items-center justify-center'>
            <div className='flex basis-1/2 cursor-pointer flex-col items-center justify-center opacity-50'>
              <MdOutlinePhotoCamera className='size-7' />
              <span className='text-sm'>Editar</span>
            </div>
            <div className='flex basis-1/2 cursor-pointer flex-col items-center justify-center opacity-50'>
              <MdOutlineNoPhotography className='size-7 text-red' />
              <span className='text-sm'>Excluir</span>
            </div>
          </div>
          {
            myProfile.photo ?
              <Image
                alt={'foto de ' + myProfile.name}
                src={myProfile.photo}
                layout='fill'
                objectFit='cover'                  
              />
              :
              <FaUserCircle className='size-full' />
          }
        </div>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='font-bold'>
          {myProfile.name}
        </h2>
        <h3>
          {myProfile.email}
        </h3>
      </div>
    </div>
  );
}