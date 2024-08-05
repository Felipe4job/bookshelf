'use client';

import { useGlobalContext } from '@/contexts/globalProvider';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { MdOutlineNoPhotography, MdOutlinePhotoCamera } from 'react-icons/md';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Forms } from '../forms';
import { ButtonEst } from './buttons';

export function EditProfile () {
  const { myProfile } = useGlobalContext();

  // Função para abrir a edição da foto no mobile ao clicar e fechar ao clicar fora
  const [ photoEditOpen, setPhotoEditOpen ] = useState(false);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e:any) => {
      if(photoRef.current && !photoRef.current.contains(e.target))
        setPhotoEditOpen(false);
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // Configurações para o form de mudar a senha

  const [ openFormPass, setOpenFormPass ] = useState(false);

  return(
    myProfile &&
    <div className='flex w-full flex-col gap-8'>
      {/* bloco 1 */}
      <div className='flex w-full'>
        <div className='flex basis-1/2 justify-center'>
          {/* Bloco referente a foto */}
          <div 
            className='group relative size-32 overflow-hidden rounded-full'
            ref={photoRef}
            onClick={() => setPhotoEditOpen(true)}
          >
            <div className={`invisible absolute z-10 flex size-full items-center justify-center bg-white/50 group-hover:visible 
              ${!photoEditOpen ? 'invisible' : 'visible'}`}
            >
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

        {/* Início dos dados nome e nome do usuário */}
        <div className='flex flex-col items-center justify-center'>
          <h2 className='flex h-8 items-center font-bold'>
            {myProfile.name}
            <FaEdit className='ml-8 text-secondary' />
          </h2>
          {
            myProfile.provider === 'credentials' &&
            <h3 className='flex h-8 items-center'>
              {myProfile.userName}
              <FaEdit className='ml-8 text-secondary' />
            </h3>
          }
        </div>
      </div>

      {/* Bloco 2 */}
      <div className='flex flex-col'>
        {/* Bloco com o o form para mudar a senha */}
        <div className={`my-4 overflow-hidden rounded-md border border-slate-200 p-4 ${!openFormPass ? 'hidden' : 'block'}`}>
          <Forms.redefinePass />
        </div>
        <div className='w-full'>
          <ButtonEst.ButtonWhiteFull
            id='openFormPass'
            text={ openFormPass ? 'Fechar' : 'Trocar senha' }
            type='button'
            onClick={() => setOpenFormPass(!openFormPass)}
          />
        </div>
      </div>
    </div>
  );
}