'use client';

import { useGlobalContext } from '@/contexts/globalProvider';
import { ButtonEst } from '../../buttons';
import { Forms } from '@/components/forms';
import { useState } from 'react';
import { GetGoogleBooksResProps } from '@/requests/books/types';
import Image from 'next/image';

export const BookNew = () => {
  const { handleModal } = useGlobalContext();
  const [ books, setBooks ] = useState<GetGoogleBooksResProps[]>([]);

  const text = `
    No campo abaixo coloque o título do livro
    que deseja adicionar. Clique na lupa e listaremos
    para você algumas opções.
  `;
  
  return (
    <div className='flex flex-col'>
      <h1 className='mb-4 flex justify-center'>Adicionar livro</h1>
      {/* Adicionar id da estante */}
      <div className='absolute right-4 top-6'>
        <ButtonEst.ButtonText
          id='closeBookNew'
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
      <div className='mb-10 max-h-96 overflow-y-scroll'>
        <Forms.bookNew setBooks={setBooks}/>
      </div>
      {
        books.length > 0 &&
        <div className='max-h-96 overflow-auto'>
          <ol>
            {
              Array.from({ length: books.length }, (_, index) => {
                const book = books[index];
                return (
                  <li key={index} className='mb-4 flex max-h-[180px] cursor-pointer gap-x-2'>
                    <div>
                      {
                        book.volumeInfo.imageLinks ?
                          <Image
                            alt='Book Cover'
                            src={book.volumeInfo.imageLinks.thumbnail}
                            height={180}
                            width={120}
                          />
                          :
                          <div className='flex h-[180px] w-[120px] flex-col border border-secondaryLight p-4 text-sm'>
                            <div className='basis-3/5 overflow-hidden text-ellipsis'>{book.volumeInfo.title}</div>
                            {
                              book.volumeInfo.authors &&
                              <div className='basis-2/5 overflow-hidden text-ellipsis'>{book.volumeInfo.authors.join(', ')}</div>
                            }
                          </div>
                      }                      
                    </div>
                    <div className='basis-3/5 overflow-auto'>
                      <ol>
                        <li><h3>{book.volumeInfo.title}</h3></li>
                        {
                          book.volumeInfo.subtitle &&
                          <li>{book.volumeInfo.subtitle}</li>
                        }
                        {
                          book.volumeInfo.authors &&
                          <li>
                            {book.volumeInfo.authors.length === 1 ? 'Autor(a): ' : 'Autores: '}
                            {book.volumeInfo.authors.join(', ')}
                          </li>
                        }
                        <li>
                          Qtd. Páginas: {book.volumeInfo.pageCount}
                        </li>
                      </ol>
                    </div>
                  </li>
                );
              })
            }
          </ol>
        </div>
      }
    </div>
  );
};