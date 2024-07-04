'use client';

import FormPublic from '@/components/forms/formPublic';


export default function ResetPass () {
  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <>
      <p 
        className='my-10 text-5xl text-grayDark'
        style={{ fontFamily: 'Londrina Solid, sans-serif' }}
      >
        Criar Senha Nova
      </p>
      <FormPublic
        fields={
          [
            {
              id: 'emailResetPass',
              name: 'email',
              placeholder: 'EMAIL',
              rules: { required: 'O campo EMAIL é obrigatório' },
            },
            {
              id: 'passResetPass',
              name: 'password',
              placeholder: 'CRIAR SENHA',
              rules: { required: 'O campo CRIAR SENHA é obrigatório' },
            },
            {
              id: 'repeatPassResetPass',
              name: 'confirmPass',
              placeholder: 'CONFIRMAR SENHA',
              rules: { required: 'O campo CONFIRMAR SENHA é obrigatório' }
            }
          ]
        }
        submitType='resetPass'
        submit={onSubmit}
      />
    </>
  );
}