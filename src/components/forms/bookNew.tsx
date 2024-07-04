'use client';

import { useForm } from 'react-hook-form';
import { InputEst } from '../basic/inputs';
import { GetGoogleBooksResProps } from '@/requests/books/types';
import { IoSearchCircle } from 'react-icons/io5';
import { crudBooks } from '@/requests/books';

interface BookNewFormProps {
  setBooks: (books: GetGoogleBooksResProps[]) => void;
}

export const BookNewForm = (props: BookNewFormProps) => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  
  const onSubmit = async (data: any) => {
    console.log('submeteu', data);

    await crudBooks.getGoogleBooks(data.bookTitle)
      .then((data) => {
        props.setBooks(data);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) } >
      <div className='relative'>
        <InputEst.textOrEmail
          id='bookTitle'
          name='bookTitle'
          placeholder='Título do livro'
          type='text'
          style={{ 
            fontSize: 'var(--text-base)',
            paddingRight: '40px' 
          }}
          rules={{
            required: 'O campo título é obrigatório.'
          }}
          register={ register }
          errors={ errors } 
        />
        <button type='submit' className='absolute inset-y-0 right-2 flex cursor-pointer items-center'>
          <IoSearchCircle className='text-primaryDark' size={30}/>
        </button>        
      </div>
    </form>
  );
};