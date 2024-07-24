'use client';

import FormPublic from '@/components/forms/formPublic';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { useState } from 'react';
import { signIn } from 'next-auth/react';


export default function ForgotPass () {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isGoogleLoading, setIsGoogleLoading ] = useState(false);

  const onSubmit = (data:any) => {
    setIsLoading(true);
    console.log(data);
    setIsLoading(false);
  };

  return (
    <>
      <p 
        className='my-10 text-5xl text-grayDark'
        style={{ fontFamily: 'Londrina Solid, sans-serif' }}
      >
        Redefinir senha
      </p>
      <FormPublic
        fields={
          [ 
            {
              id: 'emailUserLogin',
              name: 'email',
              placeholder: 'EMAIL',
              rules: { required: 'O campo EMAIL é obrigatório' },
            }
          ]
        }
        submitType='forgotPass'
        submit={onSubmit}
        isLoading={isLoading}
      />
      <p 
        className='my-4 text-xl font-light text-black opacity-65'
        style={{ fontFamily: 'Londrina Solid, sans-serif' }}
      >
        OU
      </p>
      <div 
        className={`mb-4 flex w-full items-center rounded-full bg-white py-2 pl-10 ${isGoogleLoading ? 'opacity-50' : 'cursor-pointer'} hover:scale-x-105`}
        onClick={() => {
          setIsGoogleLoading(isGoogleLoading);

          if(!isGoogleLoading)
            signIn('google', { redirect: false });
          
        }}
      >
        <FcGoogle size={35}/>
        {
          isGoogleLoading &&
          <svg className='ml-6 mr-3 size-5 animate-spin text-black' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
            <path className='opacity-75' fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'>
            </path>
          </svg>
        }
        <p 
          className='ml-8 text-sm text-black opacity-65'
          style={{ fontFamily: 'Londrina Solid, sans-serif' }}
        >
          {!isGoogleLoading ? 'Continuar com o Google' : 'Aguarde...'}
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