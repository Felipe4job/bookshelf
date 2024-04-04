import FormPublic from '@/components/forms/formPublic';


export default function ResetPass () {
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
              title: 'Email',
              placeholder: 'EMAIL',
              rules: { required: 'O campo EMAIL é obrigatório' },
              type: 'email'
            },
            {
              id: 'passResetPass',
              name: 'pass',
              title: 'Password',
              placeholder: 'CRIAR SENHA',
              rules: { required: 'O campo CRIAR SENHA é obrigatório' },
              type: 'password'
            },
            {
              id: 'repeatPassResetPass',
              name: 'repeatPass',
              title: 'Password',
              placeholder: 'CONFIRMAR SENHA',
              rules: { required: 'O campo CONFIRMAR SENHA é obrigatório' },
              type: 'password'
            }
          ]
        }
        submitType='resetPass'
      />
    </>
  );
}