'use client';

import FormPublic from '@/components/forms/formPublic';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { reqUseServer } from '@/libs/reqUseServer';
import { userPost } from '@/requests/users';
import { useRouter } from 'next/navigation';


export default function Register () {
  const router = useRouter();

  async function onSubmit (data:any) {
    const { name, email, password, userName } = data;

    await reqUseServer(userPost, { name, email, password, userName })
      .then(() => router.push('/login'))
      .catch((e:any) => {
        alert(e.message);
      });
  }

  return (
    <>
      <p 
        className='my-10 text-5xl text-grayDark'
        style={{ fontFamily: 'Londrina Solid, sans-serif' }}
      >
        Registre-se
      </p>
      <FormPublic
        fields={
          [ 
            {
              id: 'nameRegister',
              name: 'name',
              placeholder: 'SEU NOME',
              rules: { 
                required: 'O campo NOME é obrigatório',
                minLength: {
                  value: 3, 
                  message: 'O campo precisa ter no mínimo 3 caracteres.'
                }, 
                maxLength: {
                  value: 50, 
                  message: 'O campo precisa ter no máximo 50 caracteres.'
                } 
              },
            },
            {
              id: 'userNameRegister',
              name: 'userName',
              placeholder: 'NOME DE USUÁRIO',
              rules: { 
                required: 'O campo NOME DE USUÁRIO é obrigatório',
                minLength: {
                  value: 3, 
                  message: 'O campo precisa ter no mínimo 3 caracteres.'
                }, 
                maxLength: {
                  value: 50, 
                  message: 'O campo precisa ter no máximo 50 caracteres.'
                },
              },
            },
            {
              id: 'emailRegister',
              name: 'email',
              placeholder: 'EMAIL',
              rules: { required: 'O campo EMAIL é obrigatório' }
            },
            {
              id: 'passRegister',
              name: 'password',
              placeholder: 'CRIAR SENHA',
              rules: { required: 'O campo CRIAR SENHA é obrigatório' }
            },
            {
              id: 'repeatPassRegister',
              name: 'confirmPass',
              placeholder: 'CONFIRMAR SENHA',
              rules: { required: 'O campo CONFIRMAR SENHA é obrigatório' }
            }
          ]
        }
        submitType='register'
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