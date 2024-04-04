'use client';

import FormPublic from '@/components/forms/formPublic';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';

export default function Login () {
  const onSubmit = (data:any) => {
    console.log(data);
  };


  return (
    <>
      <p 
        className='my-10 text-5xl text-grayDark'
        style={{ fontFamily: 'Londrina Solid, sans-serif' }}
      >
        Bem vindo
      </p>
      <FormPublic
        fields={
          [ 
            {
              id: 'emailUserLogin',
              name: 'email',
              title: 'Email',
              placeholder: 'EMAIL',
              rules: { required: 'O campo EMAIL é obrigatório' },
              type: 'email'
            },
            {
              id: 'passLogin',
              name: 'pass',
              title: 'Password',
              placeholder: 'SENHA',
              rules: { required: 'O campo SENHA é obrigatório' },
              type: 'password'
            } 
          ]
        }
        submitType='login'
        submit={onSubmit}
      />
      <p 
        className='my-4 text-xl font-light text-black opacity-65'
        style={{ fontFamily: 'Londrina Solid, sans-serif' }}
      >
        OU
      </p>
      <div className='mb-4 flex w-full cursor-pointer items-center rounded-full bg-white py-2 pl-10 hover:scale-x-105'>
        <FcGoogle size={35}/>
        <p 
          className='ml-8 text-sm text-black opacity-65'
          style={{ fontFamily: 'Londrina Solid, sans-serif' }}
        >
          Continuar com o Google
        </p>
      </div>
      <div className='flex w-full cursor-pointer items-center rounded-full bg-black py-2 pl-10 hover:scale-x-105'>
        <BsApple size={35} color='white'/>
        <p 
          className='ml-8 text-sm text-white'
          style={{ fontFamily: 'Londrina Solid, sans-serif' }}
        >
          Continuar com o Apple
        </p>
      </div>
    </>
  );
}