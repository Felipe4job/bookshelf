import { useForm } from 'react-hook-form';
import { InputEst } from '../basic/inputs';
import { ButtonEst } from '../basic/buttons';

import { reqUseServer } from '@/libs/reqUseServer';
import { userGetVerifyPass, userPut } from '@/requests/users';
import { useGlobalContext } from '@/contexts/globalProvider';
import { useState } from 'react';

export const RedefinePassForm = () => {
  const { myProfile } = useGlobalContext();

  const { handleSubmit, register, formState: { errors }, setError, watch, setValue } = useForm();
  const [ errorMessage, setErrorMesage ] = useState<string | null>(null);

  const onSubmit = async (data: any) => {

    const { userName, password } = data;

    if(myProfile?.provider !== 'credentials') {
      await reqUseServer(userPut, { userName, password, provider: 'credentials' } );
    } else {
      if(await reqUseServer(userGetVerifyPass, { emailOrUser: myProfile.email, password })) {
        await reqUseServer(userPut, { userName });
        setErrorMesage(null);
      }
      else setErrorMesage('Senha errada');
    }
  };
  
  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      {
        myProfile?.provider != 'credentials' ?
          <div>
            <p className='mb-4'>
              Você ainda não tem um nome de usuário e uma senha.
              Após a criação você poderá acessar com login ou senha.
            </p>
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
          </div>
          :
          <div>
            <p className='mb-4'>
              Digite sua senha atual e depois crie uma senha nova.
              Caso não lembre a senha clique em sair e depois em esqueceu a senha.
            </p>
            <InputEst.pass
              id='actualPass'
              name='confirmPass'
              placeholder='Digite sua senha'
              register={ register }
              errors={ errors }
              setError={ setError }
              setValue={ setValue }
              watch={ watch }
              className='text-center text-2xl'
              login={true}
            />
          </div>
      }
      <InputEst.pass
        id='redefinePass'
        name='password'
        placeholder='Digite uma senha nova'
        register={ register }
        errors={ errors }
        setError={ setError }
        setValue={ setValue }
        watch={ watch }
        className='text-center text-2xl'
        login={false}
      />
      <InputEst.pass
        id='confirmRedefinePass'
        name='confirmPass'
        placeholder='Confirme sua senha'
        register={ register }
        errors={ errors }
        setError={ setError }
        setValue={ setValue }
        watch={ watch }
        className='text-center text-2xl'
        login={false}
      />     
      
      <div className='flex flex-row-reverse'>
        <ButtonEst.smallRound
          id='saveNewUser'
          text='Salvar'
          type='submit'
          bgColor='var(--secondaryExDark)'
          textColor='white'
        />
      </div>
      <div>
        {
          errorMessage &&
          errorMessage
        }
      </div>
    </form>
  );
};