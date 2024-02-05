'use client';

import { useForm } from 'react-hook-form';
import { Input } from '../basic/inputs';

export default function FormLogin () {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <Input.default
        id='emailUserLogin'
        name='user_email'
        title='Email ou Usuário'
        placeholder='Digite seu email ou o usuário'
        type='text'
        rules={{ required: 'O campo é obrigatório' }}
        register={ register }
        errors={ errors }
      />
      <Input.default
        id='passLogin'
        name='pass'
        title='Senha'
        placeholder='Digite sua senha'
        type='password'
        eyePass={ true }
        rules={{ required: 'O campo é obrigatório' }}
        register={ register }
        errors={ errors }
      />
    </form>
  );
}