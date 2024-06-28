'use client';

import FormPublic from '@/components/forms/formPublic';
import { FcGoogle } from 'react-icons/fc';
import { BsApple } from 'react-icons/bs';
import { PostUserEntryProps } from '@/requests/users/types';
import { reqUserServer } from '@/libs/reqUseServer';
import { userPost } from '@/requests/users';
import { useRouter } from 'next/navigation';


export default function Register () {
  const router = useRouter();

  async function onSubmit (data:any) {
    const dataUser: PostUserEntryProps = {
      name: data.name,
      email: data.email,
      password: data.pass,
      userName: data.userName,
      phone: data.phone
    };

    await reqUserServer(userPost, dataUser)
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
              title: 'Name',
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
              title: 'UserName',
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
              title: 'Email',
              placeholder: 'EMAIL',
              rules: { required: 'O campo EMAIL é obrigatório' }
            },
            {
              id: 'repeatEmailRegister',
              name: 'repeatEmail',
              title: 'Email',
              placeholder: 'CONFIRMAR EMAIL',
              rules: { required: 'O campo CONFIRMAR EMAIL é obrigatório' }
            },
            {
              id: 'passRegister',
              name: 'pass',
              title: 'Password',
              placeholder: 'CRIAR SENHA',
              rules: { required: 'O campo CRIAR SENHA é obrigatório' }
            },
            {
              id: 'repeatPassRegister',
              name: 'confirmPass',
              title: 'ConfirmPass',
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