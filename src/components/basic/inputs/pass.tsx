'use client';

import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';
import { FieldErrorsImpl } from 'react-hook-form';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

interface inputsPassInterface extends React.InputHTMLAttributes<HTMLInputElement>  {
  name: 'pass' | 'confirmPass' | 'login';
  register: any;
  errors: FieldErrorsImpl;
  setError: any;
  setValue: any;
  watch: any;
  marginBot?: string;
}

export const PasswordType = (props:inputsPassInterface) => {
  const [ viewPass, setViewPass ] = useState (false);

  useEffect(() => {
    props.register('pass');
    props.register('confirmPass');
  }, [ props, props.register ]);

  function handlePass (e: React.ChangeEvent<HTMLInputElement> | string) {
    const value = typeof e != 'string' ? e.target.value : e;

    if(props.name === 'login') return;

    if(props.name === 'pass') {
      // retirar espaços em branco
      props.setValue('pass', value.trim());

      const verification = /^(?=.*\d)(?=.*[a-z])([^\s]){6,10}$/gm.test(value);    
      
      // Tendo uma mudança no valor do password zerar o valor do confirm
      if(typeof e != 'string') {
        props.setError('confirmPass', {});
        props.setValue('confirmPass', '');
      }

      if(!verification) {
        props.setError(
          'pass',
          {
            type: 'custom',
            message: 'A senha deve ter entre 6 e 10 dígitos e ao menos uma letra e um número'
          }
        );
        return 'A senha deve ter entre 6 e 10 dígitos e ao menos uma letra e um número';
      } else props.setError('pass', {});

    } else if(props.name === 'confirmPass') {
      const passValue = props.watch('pass', '');

      if(passValue !== value) {
        props.setError(
          'confirmPass',
          {
            type: 'manual',
            message: 'A confirmação não está igual a senha digitada'
          }
        );

        return 'A confirmação não está igual a senha digitada';
      }else props.setError('confirmPass', {});
    }    
  }

  return(
    <>
      <div className={`${props.marginBot ? props.marginBot : 'mb-4'} relative`}>
        <input
          style={props.style}
          type={viewPass ? 'text' : 'password'}
          id={props.id}
          className={`block w-full rounded-lg bg-grayExLight p-2.5 text-grayDark focus:bg-white focus:text-black focus:ring-secondaryDark ${props.className}`}
          placeholder={props.placeholder}
          {...props.register(
            props.name, 
            {
              required: 'O campo é obrigatório',
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => handlePass(e),
              validate: handlePass  
            }
          )}
        />
        <span 
          className='absolute inset-y-0 right-4 flex cursor-pointer items-center text-grayDark'
          onClick={() => setViewPass(!viewPass)}
        >
          {
            !viewPass ? <BsEye /> : <BsEyeSlash />
          }
        </span>
      </div>
      <ErrorMessage
        errors={props.errors}
        name={props.name}
        render={({ message }) => <p className='error-message'>{ message }</p> }
      />
    </>
  );
};