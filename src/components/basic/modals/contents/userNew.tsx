'use client';

import { useGlobalContext } from '@/contexts/globalProvider';
import { ButtonEst } from '../../buttons';
import { Forms } from '@/components/forms';

export const UserNew = () => {
  const { handleModal } = useGlobalContext();

  return (
    <div className='flex flex-col'>
      <h1 className='mb-4 flex justify-center'>Adicionar usuário</h1>
      <div className='absolute right-4 top-6'>
        <ButtonEst.ButtonText
          id='closeUserNew'
          text='Fechar'
          textColor='var(--red)'
          type='button'
          onClick={
            () => handleModal(false)
          }
        />
      </div>
      <div className='mb-10 max-h-96 overflow-y-auto'>
        <Forms.userNew />
      </div>
    </div>
  );
};