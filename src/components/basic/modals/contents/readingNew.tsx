'use client';

import { useState } from 'react';
import { ButtonEst } from '../../buttons';
import { ReadingRequestResProps } from '@/app/(authenticated)/bookshelf/books/book/[bookId]/readings/page';

interface ReadingNewProps {
  bookTitle: string;
  lastReading?: ReadingRequestResProps; 
}

export const ReadingNewModal = (props: ReadingNewProps) => {
  const [ stages, setStages ] = useState(1);

  const handleTexts = () => {
    switch(stages) {
    case 1:
      return `
        ${!props.lastReading ? 'Vamos registrar sua primeira leitura? ' : `Sua última leitura foi entre as páginas ${props.lastReading.bookPages}.` }
        Para iniciar a leitura no seu livro "${props.bookTitle}" você deve clicar em avançar. 
        Você pode editar a data e hora e também a página
        inicial dessa leitura.
      `;
    default:
      return '';
    }
  };

  return (
    <div className='flex h-full flex-col'>
      <h1 className='mb-4 flex justify-center'>Registrar leitura</h1>
      {/* Bloco com textos para auxiliar o registro */}
      <div className='mb-4'>
        {handleTexts()}
      </div>
      {/* Bloco que inicia o o form */}
      {/* Bloco que inicia os controles */}
      {
        stages > 1 &&
        <div className='absolute bottom-4 left-6 text-xl'>
          <ButtonEst.ButtonText
            id='previousReadingNew'
            text='Voltar'
            textColor='#d69e2e'
            type='button'
            onClick={() => setStages(stages - 1)} 
          />
        </div>
      }
      <div className='absolute bottom-4 right-6 text-xl'>
        <ButtonEst.ButtonText
          id='nextReadingNew'
          text='Avançar'
          textColor='#d69e2e'
          type='button'
          onClick={() => setStages(stages + 1)} 
        />
      </div>
    </div>
  );
};