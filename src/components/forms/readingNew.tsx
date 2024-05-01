'use client';

import { useForm } from 'react-hook-form';
import { InputEst } from '../basic/inputs';
import { ButtonEst } from '../basic/buttons';

interface NewReadingProps {
  bookId: string;
  stage: number;
  lastPage?: number;
}

export const ReadingNew = (props: NewReadingProps) => {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('submeteu', data, props.bookId);
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) } >
      <div className={`${!(props.stage === 0 || props.stage === 1) ? 'hidden' : ''}`}>
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
        <p className='-mt-4 mb-4 text-sm text-primaryDark'>
          Data e hora do início da leitura
        </p>
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
            required: 'O campo página inicial é obrigatório.'
          }}
          register={ register }
          errors={ errors } 
        />
        <p className='-mt-4 mb-4 text-sm text-primaryDark'>
          Indique a página inicial.
        </p>
      </div>
      <div className={`${!(props.stage === 0 || props.stage === 3) ? 'hidden' : ''}`}>
        <InputEst.date
          id='dateReadingEnd'
          name='endDate'
          title='Data final'
          type='datetime-local'
          style={{ 
            fontSize: 'var(--text-base)'                
          }}
          rules={{
            required: 'O campo data final é obrigatório.'
          }}
          register={ register }
          errors={ errors }
        />
        <p className='-mt-4 mb-4 text-sm text-primaryDark'>
          Data e hora do final da leitura
        </p>
        <InputEst.number
          id='pageEnd'
          name='pageEnd'
          title='Página final'
          style={{ 
            fontSize: 'var(--text-base)'                
          }}
          placeholder='Digite a página final'
          value={props.lastPage?.toString()}
          rules={{
            required: 'O campo página final é obrigatório.'
          }}
          register={ register }
          errors={ errors } 
        />
        <p className='-mt-4 mb-4 text-sm text-primaryDark'>
          Indique a página final.
        </p>
        <div className='flex flex-row-reverse'>
          <ButtonEst.smallRound
            id='saveNewReading'
            text='Enviar'
            type='submit'
            bgColor='var(--secondaryExDark)'
            textColor='white'
          />
        </div>
      </div>
    </form>
  );
};