'use client';

import { useForm } from 'react-hook-form';
import { LinkEst } from '../basic/link';
import { ButtonEst } from '../basic/buttons';
import { InputEst } from '../basic/inputs';

interface paramsFormPublic {
  fields: fieldsParams[];  
  submitType: 'login' | 'resetPass' | 'register' | 'forgotPass';
  submit: (data: any)=> void;
}

interface fieldsParams {
  id: string;
  name: string;
  title: 'Email' | 'Password' | 'Name' | 'ConfirmPass' | 'UserName';
  placeholder: string;
  rules: object;
}

export default function FormPublic (params: paramsFormPublic) {

  const { handleSubmit, register, formState: { errors }, setError, setValue, watch } = useForm();
  
  return (    
    <form className='w-full' onSubmit={ handleSubmit(params.submit) }>
      {
        params.fields.map((field) => {
          function rules () {
            const rules: any = field.rules;

            if(field.name === 'repeatEmail')
              rules.validate = (value: string) => value !== watch('email', '') ? 'Os e-mails não estão iguais' : undefined;

            if(field.title === 'UserName')
              rules.onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue('userName', e.target.value.trim());

            return rules;
          }
          return (
            <div key={field.id}>
              {
                [ 'Password', 'ConfirmPass' ].includes(field.title) ?
                  <InputEst.pass
                    style={{ fontFamily: 'Londrina Solid, sans-serif' }}
                    id={field.id}
                    name={params.submitType === 'login' ? 'login' : field.title === 'Password' ? 'pass' : 'confirmPass'}
                    title={field.title}
                    placeholder={field.placeholder}
                    register={ register }
                    errors={ errors }
                    setError={ setError }
                    setValue={ setValue }
                    watch={ watch }
                    className='text-center text-2xl'
                  />
                  :
                  <InputEst.textOrEmail
                    style={{ fontFamily: 'Londrina Solid, sans-serif' }}
                    id={field.id}
                    name={field.name}
                    title={field.title}
                    placeholder={field.placeholder}
                    type={field.title === 'Email' ? 'email' : 'text'}
                    rules={rules()}
                    register={ register }
                    errors={ errors }
                    className='text-center text-2xl'
                  />
              }
              
            </div>
          );
        })
      }
      <div className='mb-4 ml-4 font-light text-grayDark hover:scale-y-105 hover:text-secondaryDark' style={{ fontFamily: 'Londrina Solid, sans-serif' }}>
        <LinkEst
          href={ params.submitType === 'login' ? '/forgotpass' : '/login' }
        >
          { params.submitType === 'login' ? 'Esqueceu sua senha?' : 'Voltar para o login.' }          
        </LinkEst>
      </div>
      {
        ![ 'register', 'resetPass' ].includes(params.submitType)  &&
        <div className=' my-4 ml-4 font-light text-grayDark hover:scale-y-105 hover:text-secondaryDark' style={{ fontFamily: 'Londrina Solid, sans-serif' }}>
          <LinkEst
            href='/register'
          >
            Registre-se          
          </LinkEst>
        </div>
      }
      <div className='flex w-full justify-center'>
        <ButtonEst.smallRound
          id='submitLogin'
          type='submit'
          bgColor='#404040'
          textColor='white'
          text={ params.submitType === 'login' ? 'ENTRAR' : 'ENVIAR' }
        />
      </div>
    </form>
  );
}