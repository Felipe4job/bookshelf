'use client';

import { useForm } from 'react-hook-form';
import { InputEst } from '../basic/inputs';

interface NewReadingProps {
  bookId: string;
  stage: number;
  lastPage?: number;
}

export const NewReading = (props: NewReadingProps) => {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('submeteu', data, props.bookId);
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) } >
      {
        (props.stage === 0 || props.stage === 1) &&
          <>
            <InputEst.date
              id='dateReading'
              name='startDate'
              title='Data de início'
              type='datetime-local'
              style={{ 
                fontSize: 'var(--text-base)'                
              }}
              rules={{
                required: 'O campo data de início é obrigatório.'
              }}
              register={ register }
              errors={ errors }
            />
            <InputEst.number
              id='pageStart'
              name='pageStart'
              title='Página inicial'
              style={{ 
                fontSize: 'var(--text-base)'                
              }}
              placeholder='Digite a página inicial'
              value={props.lastPage?.toString()}
              rules={{
                required: 'O campo data de início é obrigatório.'
              }}
              register={ register }
              errors={ errors } 
            />                     
          </>
      }
    </form>
  );
};