'use client';

import { ButtonEst } from '../../buttons';
import { ReadingRequestResProps } from '@/app/(authenticated)/bookshelf/books/book/[bookId]/readings/page';
import { Forms } from '@/components/forms';
import { useGlobalContext } from '@/contexts/globalProvider';
import { useState } from 'react';
import { CommentsNew } from './commentsNew';

interface ReadingNewProps {
  bookTitle: string;
  lastReading?: ReadingRequestResProps;
}

export const ReadingNewModal = (props: ReadingNewProps) => {
  const { handleModal } = useGlobalContext();

  const [ stage, setStage ] = useState(1);

  const handleTexts = () => {
    switch(stage) {
    case 1:
      return `
        ${!props.lastReading ? 'Vamos registrar sua primeira leitura? ' : `Sua última leitura foi entre as páginas ${props.lastReading.bookPages}.` }
        Para iniciar a leitura no seu livro "${props.bookTitle}" você deve clicar em avançar. 
        Você pode editar a data e hora e também a página
        inicial dessa leitura.
      `;
    case 2:
      return `
        Durante a leitura, você pode registrar resenhas/comentários sobre o livro ou adicionar novos personagens. 
        Ao fazer isso, você terá uma compilação detalhada de todas as informações importantes. 
        Aproveite para criar essas informações durante a leitura e, no final, terá uma formação completa de tudo. 
        Você também pode adicionar detalhes aos personagens já registrados.
      `;
    case 3:
      return `
        Espero que sua experiência de leitura tenha sido incrível! 
        Foi emocionante explorar essa história juntos. Até nossa próxima aventura literária, 
        onde vamos mergulhar em mais um mundo de letras e descobertas. Até logo!
      `;
    default:
      return '';
    }
  };

  return (
    stage &&
    <div className='flex flex-col'>
      <h1 className='mb-4 flex justify-center'>Registrar leitura</h1>
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
      {/* Bloco com textos para auxiliar o registro */}
      <div className='mb-4'>
        {handleTexts()}
      </div>
      {/* Bloco com os botões da etapa 2 */}
      {
        stage === 2 &&
        <div className='mb-6 flex w-full flex-col space-y-3'>
          <ButtonEst.ButtonWhiteFull
            id='readingEditCharacters' 
            text='Editar ou Adicionar personagens'
            type='button'
            onClick={() => {console.log('Editar personagens');}}
          />
          <ButtonEst.ButtonWhiteFull
            id='readingAddComments' 
            text='Adicionar comentário'
            type='button'
            onClick={() => {
              handleModal(true, CommentsNew);
            }}
          />
        </div>
      }
      {/* Bloco que inicia o form */}
      <div className='mb-10 max-h-96 overflow-y-scroll'>
        <Forms.newReading
          bookId='aaaaaaaa-bbbb-1ccc-8ddd-eeeeeeeeeeee'
          stage={stage} 
        />
      </div>
      {/* Bloco que inicia os controles */}
      {
        stage > 1 &&
        <div className='absolute bottom-4 left-6 text-xl'>
          <ButtonEst.ButtonText
            id='previousReadingNew'
            text='Voltar'
            textColor='var(--primaryDark)'
            type='button'
            onClick={() => setStage(stage - 1)} 
          />
        </div>
      }
      {
        stage < 3 &&
        <div className='absolute bottom-4 right-6 text-xl'>
          <ButtonEst.ButtonText
            id='nextReadingNew'
            text='Avançar'
            textColor='var(--primaryDark)'
            type='button'
            onClick={() => setStage(stage + 1)} 
          />
        </div>
      }
    </div>
  );
};