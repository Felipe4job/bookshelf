import { useForm } from 'react-hook-form';
import { InputEst } from '../basic/inputs';
import { ButtonEst } from '../basic/buttons';

import { reqUseServer } from '@/libs/reqUseServer';
import { userPost } from '@/requests/users';

export const UserNewForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {

    const { name, email, password, userName } = data;

    await reqUseServer(userPost, { name, email, password, userName, provider: 'credentials' })
      .catch((e:any) => {
        alert(e.message);
      });
  };
  
  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <InputEst.textOrEmail
        id='userName'
        name='name'
        placeholder='Digite seu nome'
        type='text'
        style={{ fontSize: 'var(--text-base)' }}
        rules={{
          required: 'O campo nome é obrigatório.'
        }}
        register={ register }
        errors={ errors }
      />
      <InputEst.textOrEmail
        id='userEmail'
        name='email'
        placeholder='Digite seu e-mail'
        type='email'
        style={{ fontSize: 'var(--text-base)' }}
        rules={{
          required: 'O campo e-mail é obrigatório.'
        }}
        register={ register }
        errors={ errors }
      />
      <InputEst.textOrEmail
        id='userNick'
        name='userName'
        placeholder='Escolha um nome de usuário'
        type='text'
        style={{ fontSize: 'var(--text-base)' }}
        rules={{
          required: 'O campo nick é obrigatório.'
        }}
        register={ register }
        errors={ errors }
      />
      <InputEst.textOrEmail
        id='userPass'
        name='password'
        placeholder='Crie uma senha'
        type='text'
        style={{ fontSize: 'var(--text-base)' }}
        rules={{
          required: 'O campo senha é obrigatório.'
        }}
        register={ register }
        errors={ errors }
      />
      <div className='flex flex-row-reverse'>
        <ButtonEst.smallRound
          id='saveNewUser'
          text='Enviar'
          type='submit'
          bgColor='var(--secondaryExDark)'
          textColor='white'
        />
      </div>
    </form>
  );
};