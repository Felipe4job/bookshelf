'use client';
import Image from 'next/image';
import { characterProps } from '@/app/(authenticated)/bookshelf/books/book/[bookId]/characters/page';
import { BoxEditText } from '../boxEditText';
import { useState } from 'react';
import { ButtonEst } from '../buttons';

export const CharacterInfor = (character: characterProps) => {
  const handleEdit = (field: string)=>{
    console.log(field, 'Adicionar o ID');
  };

  const [ viewMoreQuotes, setViewMoreQuotes ] = useState(false);
  const [ viewMoreComents, setViewMoreComents ] = useState(false);

  return (
    <div className='flex w-full flex-col rounded-lg border border-grayLight py-4'>
      <div className='flex'>
        <div className='flex basis-1/2 justify-center'>
          {
            character.image ?
              <Image
                alt='Book Cover'
                src={character.image}
                height={224}
                width={160}
              />
              :
              <div className='flex h-[224px] w-[160px] items-center border border-secondaryLight p-4'>
                {character.name}
              </div>
          }
        </div>
        <div className='flex h-[224px] basis-1/2 flex-col overflow-y-auto pr-4'>
          <h3 className='mb-2'>{character.name}</h3>
          <ol>
            <li><span className='font-semibold'>Criado em:</span> {character.createdDate}</li>
            <li><span className='font-semibold'>Atualizado:</span> {character.updatedDate}</li>
            <li><span className='font-semibold'>Descrição física:</span> {character.physhicalDescription}</li>
          </ol>
        </div>
      </div>
      <div className='w-full p-4'>
        <ol>
          <li className='mb-4 flex flex-col'>
            <span className='font-semibold'>Personalidade:</span> 
            <BoxEditText
              text={character.personality}
              editFunction={()=> handleEdit('personality')}
            />
          </li>
          <li className='mb-4 flex flex-col'>
            <span className='font-semibold'>Papel na história:</span> 
            <BoxEditText
              text={character.roleStory}
              editFunction={()=> handleEdit('roleStory')}
            />
          </li>
          <li className='mb-4 flex flex-col'>
            <span className='font-semibold'>Relacionamentos:</span> 
            <BoxEditText
              text={character.relationships}
              editFunction={()=> handleEdit('roleStory')}
            />
          </li>
          <li className='mb-4 flex flex-col'>
            <span className='font-semibold'>Arco de desenvolvimento:</span> 
            <BoxEditText
              text={character.developmentArc}
              editFunction={()=> handleEdit('roleStory')}
            />
          </li>
          <li className='mb-4 flex flex-col'>
            <span className='font-semibold'>Motivações:</span> 
            <BoxEditText
              text={character.motivations}
              editFunction={()=> handleEdit('roleStory')}
            />
          </li>
          <li className='mb-4 flex flex-col'>
            <span className='font-semibold'>História pessoal:</span> 
            <BoxEditText
              text={character.backstory}
              editFunction={()=> handleEdit('roleStory')}
            />
          </li>
          <li className='mb-4'>
            <div 
              className='flex flex-col'
            >
              <span className='font-semibold'>Citações significativas:</span>
              {
                character.significantQuotes.length > 0 &&
                <span className='mb-2 text-sm text-secondary'>
                  Você tem {character.significantQuotes.length} 
                  {character.significantQuotes.length === 1 ? ' citação.' : ' citações.'}
                </span>
              }
              <span></span>
              {
                Array.from({ length: !viewMoreQuotes ? 1 : character.significantQuotes.length }, (_, index)=>{
                  return(
                    <div key={index} className='mb-4' >
                      <BoxEditText
                        text={character.significantQuotes[index].text}
                        editFunction={()=>{}} 
                      />
                      <div className='mt-2 flex flex-row-reverse text-sm'>
                        <ButtonEst.ButtonText
                          id={`deleteCharacter-${index}`}
                          text='Deletar citação'
                          textColor='red'
                          onClick={()=>{}}
                          type='button' 
                        />
                        <div className='mr-6'>
                          Criado em: {character.significantQuotes[index].date}
                        </div>
                      </div>
                    </div>  
                  );
                })
              }
              <div className='mb-4 flex w-full justify-center text-xl'>
                <ButtonEst.ButtonText
                  id='view-more'
                  text={`${!viewMoreQuotes ? 'Ver mais' : 'Ver menos'}`}
                  onClick={()=>{ setViewMoreQuotes(!viewMoreQuotes); }}
                  textColor='black'
                  type='button' 
                />
              </div>
            </div>
          </li>
          <li className='mb-4'>
            <div 
              className='flex flex-col'
            >
              <span className='font-semibold'>Comentários:</span>
              {
                character.comments.length > 0 &&
                <span className='mb-2 text-sm text-secondary'>
                  Você tem {character.comments.length} 
                  {character.comments.length === 1 ? ' comentário.' : ' comentários.'}
                </span>
              }
              <span></span>
              {
                Array.from({ length: !viewMoreQuotes ? 1 : character.comments.length }, (_, index)=>{
                  return(
                    <div key={index} className='mb-4' >
                      <BoxEditText
                        text={character.comments[index].text}
                        editFunction={()=>{}} 
                      />
                      <div className='mt-2 flex flex-row-reverse text-sm'>
                        <ButtonEst.ButtonText
                          id={`deleteCharacter-${index}`}
                          text='Deletar comentário'
                          textColor='red'
                          onClick={()=>{}}
                          type='button' 
                        />
                        <div className='mr-6'>
                          Criado em: {character.comments[index].date}
                        </div>
                      </div>
                    </div>  
                  );
                })
              }
              <div className='mb-4 flex w-full justify-center text-xl'>
                <ButtonEst.ButtonText
                  id='view-more'
                  text={`${!viewMoreQuotes ? 'Ver mais' : 'Ver menos'}`}
                  onClick={()=>{ setViewMoreComents(!viewMoreComents); }}
                  textColor='black'
                  type='button' 
                />
              </div>
            </div>
          </li>           
        </ol>
      </div>
    </div>
  );
};