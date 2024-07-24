'use client';

import { useEffect, useRef, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { LinkEst } from '../basic/link';
import { signOut, useSession } from 'next-auth/react';
import { navigate } from '@/helpers/navigate';
import { useGlobalContext } from '@/contexts/globalProvider';
import { user } from '@/libs/auth';

export const Profile = () => {

  // Abrir e fechar o menu com a função de fechar o menu com clique fora
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

  // Carregar as informações de profile através da session
  const { handleMyProfile, myProfile } = useGlobalContext();
  const { data: session } = useSession();


  useEffect(() => {
    const userSession = session?.user as user;

    if(!myProfile || (myProfile && myProfile.id !== userSession.id))
      handleMyProfile(userSession);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function logout () {
    await signOut({
      redirect: false
    });

    navigate('/login');
  }

  return (
    <div className='mb-4 flex h-16 w-full flex-row-reverse'>
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
          className='absolute z-10 mr-4 mt-[60px] origin-top-right rounded border border-gray bg-white py-2'
          role='navigation'
          aria-label='Profile menu'
        >
          <div role='menu' aria-orientation='vertical' className='menu-dropdown'>
            <div role='menuitem' className='flex flex-col text-base text-gray'>
              <LinkEst href='/me' className='mb-2 px-2'>Meu perfil</LinkEst>
            </div>
            <div role='menuitem' className='flex flex-col text-base text-gray'>
              <LinkEst href='#' className='mb-2 px-2'>Livros</LinkEst>
            </div>
            <div role='menuitem' className='flex flex-col text-base text-gray'>
              <LinkEst href='#' className='mb-2 px-2'>Resenhas</LinkEst>
            </div>
            <div role='menuitem' className='flex flex-col text-base text-gray'>
              <LinkEst href='#' className='mb-2 px-2'>Lembretes</LinkEst>
            </div>
            <div role='menuitem' className='flex flex-col text-base text-gray'>
              <LinkEst href='#' className='mb-2 px-2'>Desejos</LinkEst>
            </div>
            <div role='menuitem' className='flex flex-col text-base text-gray'>
              <LinkEst href='/admin' className='mb-2 px-2'>Admin</LinkEst>
            </div>
            <div role='menuitem' className='flex flex-col text-base text-gray'>
              <LinkEst href='#' className='px-2' onClick={logout}>Sair</LinkEst>
            </div>
          </div>
        </nav>
      }
    </div>
  );
};