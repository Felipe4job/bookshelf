'use client';

import { useGlobalContext } from '@/contexts/globalProvider';
import { ButtonEst } from '../../buttons';
import { Forms } from '@/components/forms';

export const CommentsNew = () => {
  const { handleModal } = useGlobalContext();
  
  const text = `
  Compartilhe suas reflexões e insights sobre o texto lido, sendo claro e conciso. 
  Após enviar seu comentário, você tem a liberdade de editar. 
  Lembre-se de que seus comentários contribuirão para a formação de uma resenha 
  abrangente do livro, então aproveite a oportunidade para expressar suas opiniões.
  `;

  return (
    <div className='flex flex-col'>
      <h1 className='mb-4 flex justify-center'>Criar comentário</h1>
      {/* Adicionar verificação de leitura em andamento */}
      <div className='absolute right-4 top-6'>
        <ButtonEst.ButtonText
          id='nextReadingNew'
          text='Fechar'
          textColor='var(--red)'
          type='button'
          onClick={
            () => handleModal(false)
          } 
        />
      </div>
      <div className='mb-4'>
        {text}
      </div>
      <div className='mb-10 max-h-96 overflow-y-auto'>
        <Forms.commentNew />
      </div>
    </div>
  );
};