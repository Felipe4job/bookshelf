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
  name: 'email' | 'password' | 'name' | 'confirmPass' | 'userName' | 'phone' | 'emailOrUser';
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

            if(field.name === 'userName')
              rules.onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value.replace(' ', '').replace(/[^\w.]/g, '');
                setValue('userName', value);
              };

            return rules;
          }

          return (
            <div key={field.id}>
              {
                [ 'password', 'confirmPass' ].includes(field.name) ?
                  <InputEst.pass
                    style={{ fontFamily: 'Londrina Solid, sans-serif' }}
                    id={field.id}
                    name={field.name as 'password' | 'confirmPass'}
                    placeholder={field.placeholder}
                    register={ register }
                    errors={ errors }
                    setError={ setError }
                    setValue={ setValue }
                    watch={ watch }
                    className='text-center text-2xl'
                    login={params.submitType === 'login' ? true : false}
                  />
                  :
                  <InputEst.textOrEmail
                    style={{ fontFamily: 'Londrina Solid, sans-serif' }}
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    type={field.name === 'email' ? 'email' : 'text'}
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