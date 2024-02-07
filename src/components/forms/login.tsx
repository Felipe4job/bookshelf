'use client';

import { useForm } from 'react-hook-form';
import { Input } from '../basic/inputs';
import { LinkEst } from '../basic/link';
import { ButtonEst } from '../basic/buttons';

export default function FormLogin () {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <form className='w-full' onSubmit={ handleSubmit(onSubmit) }>
      <Input.default
        style={{ fontFamily: 'Londrina Solid, sans-serif' }}
        id='emailUserLogin'
        name='user_email'
        title='Email ou Usuário'
        placeholder='EMAIL'
        type='text'
        rules={{ required: 'O campo é obrigatório' }}
        register={ register }
        errors={ errors }
      />
      <Input.default
        style={{ fontFamily: 'Londrina Solid, sans-serif' }}
        id='passLogin'
        name='pass'
        title='Senha'
        placeholder='SENHA'
        type='password'
        // eyePass={ true }
        rules={{ required: 'O campo é obrigatório' }}
        register={ register }
        errors={ errors }
      />
      <div className='-mt-6 mb-4 ml-4 font-light text-grayDark' style={{ fontFamily: 'Londrina Solid, sans-serif' }}>
        <LinkEst
          href='#'
        >
          Esqueceu sua senha?
        </LinkEst>
      </div>
      <div className='flex w-full justify-center'>
        <ButtonEst.smallRound
          id='submitLogin'
          type='submit'
          bgColor='#404040'
          textColor='white'
          text='ENTRAR'
        />
      </div>
    </form>
  );
}