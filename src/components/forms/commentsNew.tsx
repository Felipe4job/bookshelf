'use client';

import { useForm } from 'react-hook-form';
import { InputEst } from '../basic/inputs';
import { ButtonEst } from '../basic/buttons';

export const CommentsNew = () => {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('submeteu', data);
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) } >
      <InputEst.number
        id='pageStartComment'
        name='pageStartComment'
        title='Página inicial do comentário'
        style={{ 
          fontSize: 'var(--text-base)'                
        }}
        placeholder='Digite a página inicial'
        rules={{
          required: 'O campo página inicial é obrigatório.'
        }}
        register={ register }
        errors={ errors } 
      />
      <p className='-mt-4 mb-4 text-sm text-primaryDark'>
        Indique a página inicial.
      </p>
      <InputEst.number
        id='pageEndComment'
        name='pageEndComment'
        title='Página final do comentário'
        style={{ 
          fontSize: 'var(--text-base)'                
        }}
        placeholder='Digite a página final'
        rules={{
          required: 'O campo página final é obrigatório.'
        }}
        register={ register }
        errors={ errors } 
      />
      <p className='-mt-4 mb-4 text-sm text-primaryDark'>
        Indique a página final.
      </p>
      <InputEst.textArea
        id='commentsNew'
        name='comment'
        title='Comentário do livro'
        placeholder='Escreva seu comentário'
        rules={{
          required: 'O campo página inicial é obrigatório.'
        }}
        register={ register }
        errors={ errors }
      />
      <div className='flex flex-row-reverse'>
        <ButtonEst.smallRound
          id='saveNewReading'
          text='Enviar'
          type='submit'
          bgColor='var(--secondaryExDark)'
          textColor='white'
        />
      </div>
    </form>
  );
};