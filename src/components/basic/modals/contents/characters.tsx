'use client';

import { ButtonEst } from '../../buttons';
import { Forms } from '@/components/forms';
import { useGlobalContext } from '@/contexts/globalProvider';
import { useState } from 'react';


export const CharactersModal = () => {
  const { handleModal } = useGlobalContext();

  const [ stage, setStage ] = useState(1);

  const handleTexts = () => {
    switch(stage) {
    case 1:
      return `
        Aqui estão alguns personagens já cadastrados para esse livro. Caso você queira editar algum deles 
        é só clicar no nome dele e você será redirecionado para a página do personagem, 
        se não, você pode adicionar um novo personagem clicando no botão Novo.
      `;
    case 2:
      return `
        Informe o nome e descreva o personagem fisicamente, inclua sua estatura, 
        características faciais distintivas, 
        estilo de vestimenta e qualquer outro detalhe. Você pode adicionar uma imagem para seu personagem.
        Após clicar em salvar você pode adicionar outras informações na página do personagem.
      `;
    default:
      return '';
    }
  };

  const characters = [
    'Harry Potter',
    'Hermione Granger',
    'Rony Weasley',
    'Alvo Dumbledore',
    'Severo Snape',
    'Rúbeo Hagrid',
    'Sirius Black',
    'Remo Lupin',
    'Minerva McGonagall',
    'Dementadores'
  ];

  return (
    stage &&
    <div className='flex flex-col'>
      <h1 className='mb-4 flex justify-center'>Personagens</h1>
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
      {
        stage === 1 &&
        <div className='max-h-96 overflow-y-auto'>
          <ol className='mb-4'>
            {
              Array.from({ length: characters.length }, (_, index) => {
                return (
                  <li key={index}>
                    <ButtonEst.ButtonText
                      id={`${characters[index]}ChoiceCharacters`}
                      text={characters[index]}
                      textColor='var(--greenDark)'
                      type='button'
                      onClick={() => {}}
                    />
                  </li>
                );
              })
            }
          </ol>
          <div className='mb-6 flex'>
            <ButtonEst.smallRound
              id='newCharacterStage2'
              text='Novo'
              textColor='white'
              type='button'
              onClick={() => setStage(stage + 1)}
              bgColor='var(--greenDark)'
            />
          </div>
        </div>
      }
      {/* Bloco que inicia o form */}
      {
        stage === 2 &&
        <div className='mb-10 max-h-96 overflow-y-scroll'>
          <Forms.characterNew />
        </div>
      }
      {/* Bloco que inicia os controles */}
      {
        stage === 2 &&
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
      {/* {
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
      } */}
    </div>
  );
};