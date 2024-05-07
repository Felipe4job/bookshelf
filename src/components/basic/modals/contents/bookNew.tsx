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
                  <li key={index} className='flex'>
                    {
                      book.volumeInfo.imageLinks ?
                        <Image
                          alt='Book Cover'
                          src={book.volumeInfo.imageLinks.thumbnail}
                          height={224}
                          width={160}
                        />
                        :
                        <div className='flex h-[224px] w-[160px] flex-col border border-secondaryLight p-4'>
                          <div className='basis-4/5'>{book.volumeInfo.title}</div>
                          <div>{book.volumeInfo.authors.join(', ')}</div>
                        </div>
                    }
                    <div className='flex flex-col'>
                      <ol>
                        <li>{book.volumeInfo.title}</li>
                        <li>
                          {book.volumeInfo.authors.length === 1 ? 'Autor(a): ' : 'Autores: '}
                          {book.volumeInfo.authors.join(', ')}
                        </li>
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