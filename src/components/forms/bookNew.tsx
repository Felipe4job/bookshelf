'use client';

import { useForm } from 'react-hook-form';
import { InputEst } from '../basic/inputs';
import { ButtonEst } from '../basic/buttons';
import { requests } from '@/requests';
import { GetGoogleBooksResProps } from '@/requests/books/types';

interface BookNewFormProps {
  setBooks: (books: GetGoogleBooksResProps[]) => void;
}

export const BookNewForm = (props: BookNewFormProps) => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  
  const onSubmit = async (data: any) => {
    console.log('submeteu', data);

    await requests.books.getGoogleBooks(data.bookTitle)
      .then((data) => {
        props.setBooks(data);
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) } >
      <InputEst.textOrEmail
        id='bookTitle'
        name='bookTitle'
        title='Título do livro'
        placeholder='Título do livro'
        type='text'
        style={{ fontSize: 'var(--text-base)' }}
        rules={{
          required: 'O campo título é obrigatório.'
        }}
        register={ register }
        errors={ errors } 
      />
      <div className='flex flex-row-reverse'>
        <ButtonEst.smallRound
          id='saveAddBooking'
          text='Enviar'
          type='submit'
          bgColor='var(--secondaryExDark)'
          textColor='white'
        />
      </div>
    </form>
  );
};